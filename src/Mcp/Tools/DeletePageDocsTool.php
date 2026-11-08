<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class DeletePageDocsTool extends Tool
{
    use SearchableDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only documentation for permanently deleting Simplisiti pages.

Use this tool before `DeletePageTool` to understand the `page_id` contract, destructive side effects, transaction behavior, and the difference between deleting a page and deleting a global component. It documents page relationships without duplicating component internals; use `ComponentDocsTool` for those.

### Searching

- Omit `query` to receive a compact index of deletion concepts.
- Provide case-insensitive partial terms such as `page_id`, `sections`, `component_section`, `irreversible`, or `delete versus update`.

### Response structure

The tool returns JSON with `mode`, `query`, `total`, `results`, `suggestions`, and `search`. Search results contain stable IDs, structured deletion details, examples, notes, and related concept IDs.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->documents());
    }

    public function schema(JsonSchema $schema): array
    {
        return $this->documentationSchema($schema);
    }

    protected function documents(): array
    {
        return [
            [
                'id' => 'delete-page-overview',
                'title' => 'Delete page overview',
                'category' => 'delete',
                'type' => 'workflow',
                'summary' => 'Permanently removes a page, its sections, and its component placements.',
                'keywords' => ['delete', 'page', 'destroy', 'remove', 'permanent', 'irreversible'],
                'workflow' => [
                    'identify' => 'Use AvailablePagesTool to obtain page_id.',
                    'submit' => 'Send only page_id to DeletePageTool.',
                    'execute' => 'DeletePageAction removes the page sections and component-section records inside a transaction.',
                    'result' => 'The tool returns Page deleted successfully.',
                ],
                'related' => ['page-overview', 'delete-page-payload', 'delete-page-side-effects'],
            ],
            [
                'id' => 'delete-page-payload',
                'title' => 'Delete page payload',
                'category' => 'delete',
                'type' => 'schema',
                'summary' => 'The deletion tool accepts one required page identifier and no extra confirmation field.',
                'keywords' => ['payload', 'page_id', 'identifier', 'confirm', 'minimal'],
                'fields' => [
                    ['name' => 'page_id', 'type' => 'integer', 'required' => true, 'description' => 'Existing page identifier to delete permanently.'],
                ],
                'example' => ['page_id' => 7],
                'notes' => ['Supplying page_id is the explicit destructive request.', 'Use a trusted read-only result before calling the tool.'],
                'related' => ['delete-page-overview', 'delete-page-validation'],
            ],
            [
                'id' => 'delete-page-validation',
                'title' => 'Delete page validation',
                'category' => 'validation',
                'type' => 'rules',
                'summary' => 'Validation applied before the page is resolved and deleted.',
                'keywords' => ['validation', 'required', 'integer', 'exists', 'pages', 'error', 'page_id'],
                'rules' => ['page_id' => ['required', 'integer', 'exists:pages,id']],
                'behavior' => [
                    'missing' => 'A missing page_id is rejected as a validation error.',
                    'invalid_type' => 'A non-integer page_id is rejected as a validation error.',
                    'unknown' => 'An identifier that does not exist in pages is rejected against page_id.',
                ],
                'related' => ['delete-page-payload', 'delete-page-overview'],
            ],
            [
                'id' => 'delete-page-side-effects',
                'title' => 'Delete page side effects',
                'category' => 'delete',
                'type' => 'behavior',
                'summary' => 'Deleting a page removes its sections and placements but preserves global component definitions.',
                'keywords' => ['side effects', 'sections', 'component_section', 'pivot', 'components', 'transaction'],
                'action' => 'DeletePageAction deletes component-section records, deletes each page section, and then deletes the page inside a database transaction.',
                'database' => [
                    'page' => 'The page row is deleted.',
                    'sections' => 'Sections belonging to the page are deleted.',
                    'component_section' => 'Placement records for those sections are deleted.',
                    'components' => 'Global component rows are preserved.',
                ],
                'notes' => ['The operation is irreversible unless an independent backup or restoration process exists.'],
                'related' => ['page-overview', 'delete-page-overview'],
            ],
            [
                'id' => 'delete-page-versus-other-actions',
                'title' => 'Delete page versus other actions',
                'category' => 'workflow',
                'type' => 'comparison',
                'summary' => 'Deleting a page is different from changing its metadata, changing placements, creating a page, or changing a component definition.',
                'keywords' => ['delete', 'update', 'create', 'list', 'component', 'comparison'],
                'differences' => [
                    'create' => 'Use CreatePageTool for a new page.',
                    'update' => 'Use UpdatePageTool to retain the page while changing metadata, sections, or page-specific content.',
                    'list' => 'Use AvailablePagesTool to inspect page identifiers without modifying data.',
                    'component' => 'Use component tools to change global component definitions; deleting a page does not delete components.',
                ],
                'related' => ['delete-page-overview', 'page-overview'],
            ],
        ];
    }

    protected function searchInstructions(): array
    {
        return [
            'query_examples' => ['page_id', 'sections', 'component_section', 'irreversible', 'delete versus update'],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Search for side effects before invoking the destructive page deletion tool.',
        ];
    }
}
