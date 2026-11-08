<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class UpdatePageDocsTool extends Tool
{
    use SearchableDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only documentation for updating existing Simplisiti pages.

Use this tool before `UpdatePageTool` to understand `page_id`, the complete metadata and sections payload, existing versus new sections, and page-specific component content. It focuses on the page update workflow and refers to component documentation for internal variable types and settings.

### Searching

- Omit `query` to receive a compact index of update concepts.
- Provide case-insensitive partial terms such as `page_id`, `existing section`, `content_id`, `unique URL`, or `create versus update`.

### Response structure

The tool returns JSON with `mode`, `query`, `total`, `results`, `suggestions`, and `search`. Search results contain stable IDs, structured validation details, examples, notes, and related concept IDs.
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
                'id' => 'update-page-overview',
                'title' => 'Update page workflow',
                'category' => 'update',
                'type' => 'workflow',
                'summary' => 'Replaces an existing page definition with complete metadata and sections data.',
                'keywords' => ['update', 'page', 'page_id', 'complete', 'transaction'],
                'workflow' => [
                    'identify' => 'Use AvailablePagesTool to obtain page_id.',
                    'prepare' => 'Send the complete current sections list, retaining section and component-section IDs that should remain.',
                    'submit' => 'Send page_id, name, url, title, and sections to UpdatePageTool.',
                    'persist' => 'UpdatePageAction removes omitted records and updates or creates the submitted sections and placements in a transaction.',
                ],
                'related' => ['page-overview', 'update-page-payload', 'update-page-sections'],
            ],
            [
                'id' => 'update-page-payload',
                'title' => 'Complete update page payload',
                'category' => 'update',
                'type' => 'schema',
                'summary' => 'The top-level fields required to update a page.',
                'keywords' => ['payload', 'page_id', 'name', 'url', 'title', 'sections', 'full update'],
                'fields' => [
                    ['name' => 'page_id', 'type' => 'integer', 'required' => true, 'description' => 'Existing page identifier.'],
                    ['name' => 'name', 'type' => 'string', 'required' => true, 'max' => 255, 'unique_except_current_page' => true],
                    ['name' => 'url', 'type' => 'string', 'required' => true, 'unique_except_current_page' => true, 'recommendation' => 'Prefer a leading /.'],
                    ['name' => 'title', 'type' => 'string|null', 'required' => true],
                    ['name' => 'sections', 'type' => 'array', 'required' => true, 'description' => 'Complete section list, including IDs for existing sections.'],
                ],
                'related' => ['page-structure', 'page-metadata', 'update-page-validation'],
            ],
            [
                'id' => 'update-page-validation',
                'title' => 'Update page validation',
                'category' => 'validation',
                'type' => 'rules',
                'summary' => 'Rules applied by UpdatePageRequest, with name and URL uniqueness ignoring the current page.',
                'keywords' => ['validation', 'page_id', 'unique', 'ignore', 'section id', 'content_id', 'exists'],
                'rules' => [
                    'page_id' => ['required', 'integer', 'exists:pages,id'],
                    'name' => ['required', 'string', 'max:255', 'unique except current page'],
                    'url' => ['required', 'unique except current page'],
                    'title' => ['nullable', 'string'],
                    'sections' => ['required', 'array'],
                    'sections.*.id' => ['sometimes', 'required', 'integer', 'exists:sections,id'],
                    'sections.*.order' => ['required', 'integer', 'min:0'],
                    'sections.*.components' => ['required', 'array'],
                    'sections.*.components.*.id' => ['required', 'integer', 'exists:components,id'],
                    'sections.*.components.*.order' => ['nullable', 'integer', 'min:0'],
                    'sections.*.components.*.variables' => ['required', 'array'],
                    'sections.*.components.*.variables.*.type' => ['required', 'in:text,number,tel,email,url,password,checkbox,radio,date,time,datetime-local,month,week,color,resource,datatable,textarea,select,datasource,action,page,link,upload_file'],
                    'sections.*.components.*.variables.*.name' => ['required', 'string', 'max:255'],
                    'sections.*.components.*.variables.*.default' => ['nullable'],
                    'sections.*.components.*.content' => ['nullable', 'array'],
                    'sections.*.components.*.content_id' => ['sometimes', 'required', 'integer', 'exists:component_section,id'],
                ],
                'related' => ['update-page-payload', 'update-page-sections'],
            ],
            [
                'id' => 'update-page-sections',
                'title' => 'Existing and new page sections',
                'category' => 'update',
                'type' => 'behavior',
                'summary' => 'The update action uses IDs to distinguish records to update from records to create.',
                'keywords' => ['sections', 'existing', 'new', 'id', 'content_id', 'remove', 'placement'],
                'behavior' => [
                    'existing_section' => 'Include sections.id to update that section; omit it only for a new section.',
                    'removed_section' => 'A stored section omitted from the complete payload is deleted.',
                    'existing_placement' => 'Include component content_id to update an existing component-section placement.',
                    'removed_placement' => 'A stored placement omitted from an existing section is deleted.',
                    'new_placement' => 'Omit content_id when a new component placement should be attached.',
                ],
                'notes' => [
                    'The page update is complete, not partial.',
                    'Every placement must include a variables array; use [] when the component has no variables. Variable internals remain documented by the component tools.',
                ],
                'related' => ['page-structure', 'page-component-overrides', 'update-page-overview'],
            ],
            [
                'id' => 'update-page-create-difference',
                'title' => 'Page creation versus update',
                'category' => 'workflow',
                'type' => 'comparison',
                'summary' => 'Creation and update share the page hierarchy but differ in identifiers and persistence behavior.',
                'keywords' => ['create', 'update', 'difference', 'page_id', 'section id', 'content_id'],
                'differences' => [
                    'identifier' => 'Creation has no page_id; update requires an existing page_id.',
                    'sections' => 'Creation sends new sections; update uses section.id and content_id to retain existing records.',
                    'uniqueness' => 'Creation requires new unique name and URL; update ignores the current page for both checks.',
                    'removal' => 'Update deletes stored sections and placements omitted from the complete payload.',
                ],
                'related' => ['create-page-overview', 'update-page-overview', 'update-page-sections'],
            ],
        ];
    }

    protected function searchInstructions(): array
    {
        return [
            'query_examples' => ['page_id', 'existing section', 'content_id', 'unique URL', 'create versus update'],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Search for section IDs or content_id when preparing a complete update payload.',
        ];
    }
}
