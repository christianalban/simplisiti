<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Page\UpdatePageAction;
use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Requests\Page\UpdatePageRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class UpdatePageTool extends CreatePageTool
{
    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Updates an existing Simplisiti page using the same complete payload flow as `PageController::update`.

A page is composed of ordered sections, and each section references existing components whose content can be customized for that page. Send `page_id`, `name`, `url`, `title`, and the complete current `sections` payload. This is not a partial PATCH operation. Use `PageDocsTool` for the page relationship and the component documentation tools for component internals.

The input and validation rules match `UpdatePageRequest`:

- `page_id` is required, must be an integer, and must identify an existing page.
- `name` is required, must be a string with at most 255 characters, and must be unique while ignoring the current page.
- `url` is required and must be unique while ignoring the current page. URLs are preferably written with a leading `/`, but that format is not enforced by the current request.
- `title` is a nullable string used as the browser-tab name.
- `sections` is required and complete. A section may include an existing `id`; every section requires `order` and a `components` array.
- Every section component requires an existing component `id` and a `variables` array. Send `variables: []` when the component has no variables. `content_id` may identify an existing component-section pivot when updating an existing placement.

`UpdatePageAction` updates page metadata, removes omitted sections and placements, creates new sections, and updates existing ones inside a transaction. A successful call returns `Page updated successfully`; validation failures retain paths such as `sections.0.components.1.content_id`.
MARKDOWN;

    /**
     * Handle the tool request.
     */
    public function handle(Request $request): Response
    {
        $pageId = $request->validate([
            'page_id' => ['required', 'integer', 'exists:pages,id'],
        ])['page_id'];

        $page = Page::find($pageId);

        if (! $page) {
            throw ValidationException::withMessages([
                'page_id' => ['The selected page is no longer available.'],
            ]);
        }

        $rules = (new UpdatePageRequest)->rules();
        $rules['name'] = [
            'required',
            'string',
            'max:255',
            Rule::unique('pages')->ignore($page->getKey(), $page->getKeyName()),
        ];
        $rules['url'] = [
            'required',
            Rule::unique('pages')->ignore($page->getKey(), $page->getKeyName()),
        ];
        $rules['page_id'] = ['required', 'integer', 'exists:pages,id'];

        $validated = $request->validate($rules);
        unset($validated['page_id']);

        (new UpdatePageAction)->execute($page, $validated);

        return Response::json([
            'message' => 'Page updated successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'page_id' => $schema->integer()
                ->description('Required existing page identifier to update.')
                ->required(),
            ...$this->pageSchema($schema, includeSectionId: true, includeContentId: true),
        ];
    }
}
