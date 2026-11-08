<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Http\Resources\ComponentResource;
use Alban\Simplisiti\Models\Component;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class AvailableComponentsTool extends Tool
{
    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Lists available components in the Simplisiti CMS with a compact default response.

When `query` is omitted, the tool returns only each component's `id` and `name` to minimize response size. Use the `id` with update or delete tools when you need to modify a component.

When `query` is provided, the tool performs a case-insensitive partial search against component names and returns every matching component expanded with its complete resource representation, including HTML and variables. Use focused queries when you need the full definition of a component.

The search is read-only and only examines component names; it does not search inside HTML or variables. An empty query behaves like an omitted query, and a query with no matches returns an empty array.

### Response Structure (JSON)

Without `query`, the response is an array of compact objects:
- **id** (integer): Unique identifier.
- **name** (string): Component name.

With `query`, the response is an array of complete component objects:
- **id** (integer): Unique identifier.
- **name** (string): Component name.
- **html** (string): HTML structure of the component.
- **variables** (array): Configured dynamic fields, including attributes such as `type`, `name`, `default`, `options`, `applied_settings`, and `value`.
MARKDOWN;

    /**
     * Handle the tool request.
     */
    public function handle(Request $request): Response
    {
        $validated = $request->validate([
            'query' => 'nullable|string',
        ]);
        $query = trim($validated['query'] ?? '');

        if ($query === '') {
            $components = Component::query()
                ->select(['id', 'name'])
                ->orderBy('name')
                ->get()
                ->map(fn (Component $component): array => [
                    'id' => $component->id,
                    'name' => $component->name,
                ])
                ->all();

            return Response::json($components);
        }

        $normalizedQuery = function_exists('mb_strtolower')
            ? mb_strtolower($query, 'UTF-8')
            : strtolower($query);
        $components = Component::query()
            ->whereRaw('LOWER(name) LIKE ?', ["%{$normalizedQuery}%"])
            ->orderBy('name')
            ->get();

        return Response::json(ComponentResource::collection($components)->resolve());
    }

    /**
     * Get the tool's input schema.
     *
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'query' => $schema->string()
                ->description('Optional case-insensitive partial name search. Omit it for compact id/name results; provide it to expand all matching components.')
                ->nullable(),
        ];
    }
}
