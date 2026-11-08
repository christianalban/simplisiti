<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Page\StorePageAction;
use Alban\Simplisiti\Requests\Page\StorePageRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class CreatePageTool extends Tool
{
    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Creates a new page in the Simplisiti CMS using the same complete payload flow as `PageController::store`.

A page is a named and addressable document composed of ordered sections. Each section contains references to existing components. The page can provide content and variable overrides for those component placements without changing the global component definition. Use `PageDocsTool` for the page relationship and the component documentation tools for component internals.

Use this destructive tool only when a new page must be created. Do not use it to update, delete, clone, or merely inspect an existing page. The full payload must include the page fields and every section with its component references.

The input and validation rules match `StorePageRequest`:

- `name` is required, must be a string with at most 255 characters, and must be unique.
- `url` is required and must be unique. URLs are preferably written with a leading `/`, but the current request does not enforce that format.
- `title` is a nullable string used as the browser-tab name.
- `sections` is required and must be an array. Every section requires an integer `order` greater than or equal to zero and a `components` array.
- Every section component requires an existing component `id` and a `variables` array. Send `variables: []` when the component has no variables. Its `order` and `content` are optional; `content_id` is accepted only when it references an existing `component_section` record.

`StorePageAction` creates the page, sections, and component placements in a transaction. A successful call returns `Page created successfully`; validation failures retain paths such as `sections.0.components.1.id`.
MARKDOWN;

    /**
     * Handle the tool request.
     */
    public function handle(Request $request): Response
    {
        $validated = $request->validate((new StorePageRequest)->rules());

        (new StorePageAction)->execute($validated);

        return Response::json([
            'message' => 'Page created successfully',
        ]);
    }

    /**
     * Get the tool's input schema.
     *
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return $this->pageSchema($schema, includeSectionId: false, includeContentId: true);
    }

    /**
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    protected function pageSchema(JsonSchema $schema, bool $includeSectionId, bool $includeContentId): array
    {
        $component = [
            'id' => $schema->integer()
                ->description('Required existing component identifier.')
                ->required(),
            'order' => $schema->integer()
                ->min(0)
                ->description('Optional component placement order; defaults to zero when stored.')
                ->nullable(),
            'variables' => $schema->array()
                ->description('Required component variable data used to derive page placement settings; send [] when the component has no variables. Consult component documentation for its internal structure.')
                ->items($schema->object())
                ->required(),
            'content' => $schema->object()
                ->description('Optional map of component variable names to page-specific content overrides.')
                ->nullable(),
        ];

        if ($includeContentId) {
            $component['content_id'] = $schema->integer()
                ->description('Optional existing component-section content identifier.');
        }

        $section = [
            'order' => $schema->integer()
                ->min(0)
                ->description('Required section order, starting at zero.')
                ->required(),
            'components' => $schema->array()
                ->description('Required component placements in this section.')
                ->items($schema->object($component))
                ->required(),
        ];

        if ($includeSectionId) {
            $section = [
                'id' => $schema->integer()
                    ->description('Optional existing section identifier.'),
                ...$section,
            ];
        }

        return [
            'name' => $schema->string()
                ->max(255)
                ->description('Required unique page name; maximum 255 characters.')
                ->required(),
            'url' => $schema->string()
                ->description('Required unique page URL; preferably starts with /.')
                ->required(),
            'title' => $schema->string()
                ->description('Nullable browser-tab title.')
                ->nullable()
                ->required(),
            'sections' => $schema->array()
                ->description('Complete ordered section list for the new page.')
                ->items($schema->object($section))
                ->required(),
        ];
    }
}
