<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Models\Setting;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class AvailableSettingsTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Lists configuration fields registered by installed and enabled Simplisiti plugins.

When `query` is omitted, the response is compact: it contains each plugin's identifier and metadata plus each setting's `name`, `label`, `type`, `description`, and `required` flag. Use this form to discover the available configuration fields without loading current values and option payloads.

When `query` is supplied, the tool performs a case-insensitive partial search across plugin identifiers, plugin labels/descriptions, setting names, labels, types, descriptions, and option metadata. Matching settings are expanded with their current `value`, `default`, `options`, and `data` metadata. Use the exact plugin identifier and setting name from the result with `UpdateSettingTool`.

The tool is read-only. It does not change settings and does not upload files. For fields with type `upload_file`, use `UploadSettingFileTool` instead of sending a scalar value to `UpdateSettingTool`.

### Response Structure (JSON)

Without `query`, the response is an array of plugin groups:
- `plugin`: plugin class identifier.
- `label`: plugin display title, when registered.
- `description`: plugin description, when registered.
- `items`: compact setting definitions with `name`, `label`, `type`, `description`, and `required`.

With `query`, matching plugin groups contain expanded setting definitions:
- `name`, `type`, `label`, `description`, and `required`.
- `value`: current persisted value after the plugin's merge rules.
- `default`: declared default value.
- `options`: type-specific options, including the upload endpoint for `upload_file`.
- `data`: dynamic type-specific data, when supplied by the plugin.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate([
            'query' => 'nullable|string',
        ]);
        $query = trim($validated['query'] ?? '');

        $settings = app(SimplisitiApp::class)
            ->getSettingManager()
            ->getSettingMenu(Setting::query()->get());

        if ($query === '') {
            return Response::json(array_map(
                fn (array $group): array => [
                    'plugin' => $group['plugin'] ?? null,
                    'label' => $group['label'] ?? null,
                    'description' => $group['description'] ?? null,
                    'items' => array_map(
                        fn (array $item): array => $this->compactItem($item),
                        $group['items'] ?? [],
                    ),
                ],
                $settings,
            ));
        }

        $normalizedQuery = function_exists('mb_strtolower')
            ? mb_strtolower($query, 'UTF-8')
            : strtolower($query);

        $expanded = [];

        foreach ($settings as $group) {
            $groupHaystack = $this->normalize([
                $group['plugin'] ?? null,
                $group['label'] ?? null,
                $group['description'] ?? null,
            ]);
            $groupMatches = str_contains($groupHaystack, $normalizedQuery);
            $items = [];

            foreach ($group['items'] ?? [] as $item) {
                $itemHaystack = $this->normalize($item);

                if ($groupMatches || str_contains($itemHaystack, $normalizedQuery)) {
                    $items[] = $this->expandedItem($item);
                }
            }

            if ($items !== []) {
                $expanded[] = [
                    'plugin' => $group['plugin'] ?? null,
                    'label' => $group['label'] ?? null,
                    'description' => $group['description'] ?? null,
                    'items' => $items,
                ];
            }
        }

        return Response::json($expanded);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'query' => $schema->string()
                ->nullable()
                ->description('Optional case-insensitive search across plugin and setting metadata. Omit it for compact results; provide it to expand matching settings.'),
        ];
    }

    /**
     * @param  array<string, mixed>  $item
     * @return array<string, mixed>
     */
    private function compactItem(array $item): array
    {
        return [
            'name' => $item['name'] ?? null,
            'label' => $item['label'] ?? null,
            'type' => $item['type'] ?? null,
            'description' => $item['description'] ?? null,
            'required' => $item['required'] ?? false,
        ];
    }

    /**
     * @param  array<string, mixed>  $item
     * @return array<string, mixed>
     */
    private function expandedItem(array $item): array
    {
        $expanded = $this->compactItem($item);

        foreach (['value', 'default', 'options', 'data'] as $field) {
            if (array_key_exists($field, $item)) {
                $expanded[$field] = $item[$field];
            }
        }

        return $expanded;
    }

    /**
     * @param  array<string, mixed>  $value
     */
    private function normalize(array $value): string
    {
        $encoded = json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) ?: '';

        return function_exists('mb_strtolower')
            ? mb_strtolower($encoded, 'UTF-8')
            : strtolower($encoded);
    }
}
