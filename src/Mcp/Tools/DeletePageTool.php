<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Page\DeletePageAction;
use Alban\Simplisiti\Models\Page;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class DeletePageTool extends Tool
{
    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Permanently deletes an existing Simplisiti page.

A page is composed of sections that contain references to components. Deleting a page removes its sections and their `component_section` placement records through `DeletePageAction`, but it does not delete the global component definitions. The operation is destructive and does not require an additional confirmation flag; the supplied `page_id` is the explicit request.

Use this tool only when the page and its placements should no longer exist. Use `AvailablePagesTool` to find the identifier, `PageDocsTool` for page concepts, `UpdatePageTool` to change the page, `CreatePageTool` to create a new page, and the component tools for global component definitions.

The MCP validates `page_id` as a required integer that must exist in the `pages` table, resolves the page, and executes the same `DeletePageAction` used by `PageController::destroy`. A successful call returns `Page deleted successfully`.
MARKDOWN;

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

        (new DeletePageAction)->execute($page);

        return Response::json([
            'message' => 'Page deleted successfully',
        ]);
    }

    /**
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'page_id' => $schema->integer()
                ->description('Required existing page identifier to delete permanently.')
                ->required(),
        ];
    }
}
