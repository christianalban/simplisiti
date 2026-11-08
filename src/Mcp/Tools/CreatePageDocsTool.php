<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class CreatePageDocsTool extends Tool
{
    use SearchableDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only documentation for creating Simplisiti pages.

Use this tool before `CreatePageTool` to understand the complete page payload, section ordering, component references, page-specific content, and validation rules. It focuses on page creation and does not duplicate the internal component variable documentation; use `ComponentDocsTool` and its specialized tools for that.

### Searching

- Omit `query` to receive a compact index of creation concepts.
- Provide case-insensitive partial terms such as `sections`, `component id`, `page URL`, `content override`, or `validation`.

### Response structure

The tool returns JSON with `mode`, `query`, `total`, `results`, `suggestions`, and `search`. Search results contain stable IDs, structured fields, examples, validation rules, and related concept IDs.
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
                'id' => 'create-page-overview',
                'title' => 'Create page workflow',
                'category' => 'create',
                'type' => 'workflow',
                'summary' => 'Creates page metadata, ordered sections, and references to existing components in one transaction.',
                'keywords' => ['create', 'page', 'store', 'sections', 'components', 'transaction'],
                'workflow' => [
                    'prepare' => 'Obtain existing component IDs and prepare the complete ordered sections payload.',
                    'submit' => 'Send name, url, title, and sections to CreatePageTool.',
                    'persist' => 'StorePageAction creates the page, sections, and component placements in a transaction.',
                    'result' => 'The tool returns Page created successfully.',
                ],
                'related' => ['page-overview', 'create-page-payload'],
            ],
            [
                'id' => 'create-page-payload',
                'title' => 'Create page payload',
                'category' => 'create',
                'type' => 'schema',
                'summary' => 'The complete top-level payload required to create a page.',
                'keywords' => ['payload', 'name', 'url', 'title', 'sections', 'complete'],
                'fields' => [
                    ['name' => 'name', 'type' => 'string', 'required' => true, 'max' => 255, 'unique' => true],
                    ['name' => 'url', 'type' => 'string', 'required' => true, 'unique' => true, 'recommendation' => 'Prefer a leading /.'],
                    ['name' => 'title', 'type' => 'string|null', 'required' => true, 'description' => 'Nullable browser-tab title.'],
                    ['name' => 'sections', 'type' => 'array', 'required' => true, 'description' => 'Complete ordered section list.'],
                ],
                'example' => [
                    'name' => 'About',
                    'url' => '/about',
                    'title' => 'About us',
                    'sections' => [
                        [
                            'order' => 0,
                            'components' => [
                                ['id' => 12, 'order' => 0, 'variables' => [], 'content' => ['headline' => 'Our team']],
                            ],
                        ],
                    ],
                ],
                'related' => ['page-structure', 'page-metadata', 'create-page-validation'],
            ],
            [
                'id' => 'create-page-validation',
                'title' => 'Create page validation',
                'category' => 'validation',
                'type' => 'rules',
                'summary' => 'Rules applied by StorePageRequest before the page action runs.',
                'keywords' => ['validation', 'required', 'unique', 'section', 'component', 'exists', 'order'],
                'rules' => [
                    'name' => ['required', 'string', 'max:255', 'unique:pages'],
                    'url' => ['required', 'unique:pages'],
                    'title' => ['nullable', 'string'],
                    'sections' => ['required', 'array'],
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
                'notes' => [
                    'The request validates component references but does not duplicate the component variable type rules.',
                    'Nested failures retain their field path for correction.',
                ],
                'related' => ['create-page-payload', 'page-component-overrides'],
            ],
            [
                'id' => 'create-page-components',
                'title' => 'Component references during page creation',
                'category' => 'create',
                'type' => 'behavior',
                'summary' => 'New pages attach existing components to each section instead of creating component definitions.',
                'keywords' => ['component id', 'reference', 'section', 'content', 'variables', 'placement'],
                'behavior' => [
                    'id' => 'Use an existing components.id value.',
                    'variables' => 'Required placement data array needed by the page action; send [] when the component has no variables, and consult component documentation for non-empty values.',
                    'content' => 'Map component variable names to values specific to this page.',
                    'content_id' => 'Only use an existing component_section identifier when the request requires it.',
                ],
                'related' => ['page-structure', 'page-component-overrides', 'component-overview'],
            ],
        ];
    }

    protected function searchInstructions(): array
    {
        return [
            'query_examples' => ['sections', 'component id', 'page URL', 'content override', 'validation'],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Search for a page field or nested path; follow related component IDs for component-specific details.',
        ];
    }
}
