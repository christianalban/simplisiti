<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Http\Resources\StyleResource;
use Alban\Simplisiti\Models\Style;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class AvailableStylesTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Lists global CSS styles in the Simplisiti CMS.

Styles contain CSS code that is loaded on every page when `is_active` is `true`. Setting `is_active` to `false` disables that style globally without deleting it.

When `query` is omitted, the tool returns compact metadata (`id`, `name`, `is_active`, and `order`) ordered by the stored order. When `query` is provided, it performs a case-insensitive partial search by name and returns every matching style with its complete CSS code and metadata.

Use the returned `id` with `UpdateStyleTool`, `DeleteStyleTool`, or `OrderStyleTool`. This tool is read-only and does not change activation or ordering.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate([
            'query' => 'nullable|string',
        ]);
        $query = trim($validated['query'] ?? '');

        if ($query === '') {
            return Response::json(
                Style::query()
                    ->select(['id', 'name', 'is_active', 'order'])
                    ->get()
                    ->map(fn (Style $style): array => [
                        'id' => $style->id,
                        'name' => $style->name,
                        'is_active' => $style->is_active,
                        'order' => $style->order,
                    ])
                    ->all(),
            );
        }

        $normalizedQuery = function_exists('mb_strtolower')
            ? mb_strtolower($query, 'UTF-8')
            : strtolower($query);

        $styles = Style::query()
            ->whereRaw('LOWER(name) LIKE ?', ["%{$normalizedQuery}%"])
            ->get();

        return Response::json(StyleResource::collection($styles)->resolve());
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'query' => $schema->string()
                ->description('Optional case-insensitive partial search by style name. Omit it for compact metadata; provide it to expand matching CSS styles.')
                ->nullable(),
        ];
    }
}
