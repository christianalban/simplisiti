<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Setting\UpdateSettingAction;
use Alban\Simplisiti\Requests\Setting\UpdateSettingRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class UpdateSettingTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Updates one or more values registered by Simplisiti plugins.

Send `items` as an array. Every item must include the exact plugin identifier and setting `name` returned by `AvailableSettingsTool`, plus a `value` key. The value may be a string, number, boolean, array, object, or `null`; use `null` deliberately when the plugin setting should be cleared. The tool updates values by the `plugin` + `name` pair through the same `UpdateSettingRequest` and `UpdateSettingAction` used by `SettingController`.

Use this tool for ordinary settings, including text inputs, checkboxes, selects, datatables, datasource values, page values, and other JSON-compatible configuration values. Do not use it for `upload_file`: that field represents a multipart upload handled by the plugin's own endpoint. Use `UploadSettingFileTool` with a remote HTTP or HTTPS URL instead.

The operation may update multiple settings atomically through the existing action. It does not change plugin installation state or the setting definition itself. A successful call returns the controller-compatible message `Resource updated successfully`.

Validation matches `UpdateSettingRequest`:
- `items` is required and must be an array.
- `items.*.plugin` is required and must be a string.
- `items.*.name` is required and must be a string.
- `items.*.value` accepts nullable values without imposing a scalar type.

Include `value` in every item even when its value is `null`; omitting the key would leave the action without the value it must persist.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate((new UpdateSettingRequest)->rules());

        foreach ($validated['items'] as $index => $item) {
            if (! array_key_exists('value', $item)) {
                throw ValidationException::withMessages([
                    "items.{$index}.value" => ['The value key is required; send null to clear a setting.'],
                ]);
            }
        }

        (new UpdateSettingAction)->execute($validated);

        return Response::json([
            'message' => 'Resource updated successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        $value = fn () => $schema->union([
            'string',
            'integer',
            'number',
            'boolean',
            'array',
            'object',
            'null',
        ]);

        return [
            'items' => $schema->array()
                ->description('Required settings to update. Include value in every item, including null when clearing a setting.')
                ->items(
                    $schema->object([
                        'plugin' => $schema->string()
                            ->description('Required exact plugin identifier returned by AvailableSettingsTool.')
                            ->required(),
                        'name' => $schema->string()
                            ->description('Required exact setting name returned by AvailableSettingsTool.')
                            ->required(),
                        'value' => $value()
                            ->description('Required JSON-compatible setting value. Send null to clear the value.')
                            ->required(),
                    ]),
                )
                ->required(),
        ];
    }
}
