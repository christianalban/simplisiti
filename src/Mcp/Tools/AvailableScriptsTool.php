<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Http\Resources\ScriptResource;
use Alban\Simplisiti\Models\Script;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class AvailableScriptsTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Lists global JavaScript scripts in the Simplisiti CMS.

Scripts contain JavaScript code that is loaded on every page when `is_active` is `true`. Setting `is_active` to `false` disables that script globally without deleting it.

When `query` is omitted, the tool returns compact metadata (`id`, `name`, `is_active`, and `order`) ordered by the stored order. When `query` is provided, it performs a case-insensitive partial search by name and returns every matching script with its complete JavaScript code and metadata.

Use the returned `id` with `UpdateScriptTool`, `DeleteScriptTool`, or `OrderScriptTool`. This tool is read-only and does not change activation or ordering.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate([
            'query' => 'nullable|string',
        ]);
        $query = trim($validated['query'] ?? '');

        if ($query === '') {
            return Response::json(
                Script::query()
                    ->select(['id', 'name', 'is_active', 'order'])
                    ->get()
                    ->map(fn (Script $script): array => [
                        'id' => $script->id,
                        'name' => $script->name,
                        'is_active' => $script->is_active,
                        'order' => $script->order,
                    ])
                    ->all(),
            );
        }

        $normalizedQuery = function_exists('mb_strtolower')
            ? mb_strtolower($query, 'UTF-8')
            : strtolower($query);

        $scripts = Script::query()
            ->whereRaw('LOWER(name) LIKE ?', ["%{$normalizedQuery}%"])
            ->get();

        return Response::json(ScriptResource::collection($scripts)->resolve());
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'query' => $schema->string()
                ->description('Optional case-insensitive partial search by script name. Omit it for compact metadata; provide it to expand matching JavaScript scripts.')
                ->nullable(),
        ];
    }
}
