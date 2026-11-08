<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Http\Resources\PageResource;
use Alban\Simplisiti\Models\Page;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Http\Request as HttpRequest;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class AvailablePagesTool extends Tool
{
    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Lists available pages in the Simplisiti CMS with a compact default response.

A page has a name, a browser-tab title, a URL, and ordered sections. Each section references components, and the page can provide content overrides for the variables of those component placements. Use `PageDocsTool` for the page structure and the component documentation tools for the internal component and variable contract.

When `query` is omitted, the tool returns only each page's `id`, `name`, `url`, and `title` to minimize response size. Use the `id` with update or delete tools when you need to modify a page.

When `query` is provided, the tool performs a case-insensitive partial search against page names and URLs and returns every matching page expanded with its ordered sections and component references. Use focused queries when you need the full page definition.

The search is read-only and does not search inside component HTML or variables. An empty query behaves like an omitted query, and a query with no matches returns an empty array.

### Response Structure (JSON)

Without `query`, the response is an array of compact objects:
- **id** (integer): Unique page identifier.
- **name** (string): Page name.
- **url** (string): Page URL; URLs are preferably written with a leading `/`.
- **title** (string|null): Browser-tab title.

With `query`, the response is an array of complete page objects with sections and their component references. Consult `PageDocsTool` for the page relationship and the component documentation tools for interpreting component variables.
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
            $pages = Page::query()
                ->select(['id', 'name', 'url', 'title'])
                ->orderBy('name')
                ->get()
                ->map(fn (Page $page): array => [
                    'id' => $page->id,
                    'name' => $page->name,
                    'url' => $page->url,
                    'title' => $page->title,
                ])
                ->all();

            return Response::json($pages);
        }

        $normalizedQuery = function_exists('mb_strtolower')
            ? mb_strtolower($query, 'UTF-8')
            : strtolower($query);
        $pages = Page::query()
            ->withOrderedSectionsAndComponents()
            ->where(function ($queryBuilder) use ($normalizedQuery): void {
                $queryBuilder
                    ->whereRaw('LOWER(name) LIKE ?', ["%{$normalizedQuery}%"])
                    ->orWhereRaw('LOWER(url) LIKE ?', ["%{$normalizedQuery}%"]);
            })
            ->orderBy('name')
            ->get();

        return Response::json(
            PageResource::collection($pages)->resolve(
                HttpRequest::create('/', 'GET', ['withData' => 'true']),
            ),
        );
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
                ->description('Optional case-insensitive partial search by page name or URL. Omit it for compact page metadata; provide it to expand all matching pages.')
                ->nullable(),
        ];
    }
}
