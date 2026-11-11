<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class PageDocsTool extends Tool
{
    use SearchableDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides shared, read-only documentation for Simplisiti pages.

A page is a named and addressable document composed of ordered sections. Each section references existing components, and a page can provide content overrides for the variables of those component placements. This tool documents the page, section, placement, and page metadata concepts only; it does not duplicate the internal component or variable contract.

Use `CreatePageDocsTool`, `UpdatePageDocsTool`, or `DeletePageDocsTool` for workflow-specific guidance. Use `ComponentDocsTool` and the component creation/update documentation tools when you need to understand component variables, types, settings, or parsers.

### Searching

- Omit `query` to receive a compact index of shared page concepts.
- Provide one or more case-insensitive partial terms to receive detailed matching concepts.
- Useful queries include `page sections`, `page URL`, `component content override`, and `browser title`.

### Response structure

The tool returns JSON with `mode`, `query`, `total`, `results`, `suggestions`, and `search`. It is deterministic and does not read or modify database records.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->documents());
    }

    /**
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return $this->documentationSchema($schema);
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function documents(): array
    {
        return [
            [
                'id' => 'page-overview',
                'title' => 'Page overview',
                'category' => 'page',
                'type' => 'concept',
                'summary' => 'A named and addressable document composed of ordered sections containing component placements.',
                'keywords' => ['page', 'name', 'url', 'title', 'section', 'component', 'content'],
                'definition' => 'A page stores its own metadata and layout. Its sections determine the order of the page areas, and each section references reusable components. The same component definition can therefore be used on multiple pages with different page-specific content.',
                'fields' => [
                    ['name' => 'name', 'type' => 'string', 'description' => 'Unique page name.'],
                    ['name' => 'url', 'type' => 'string', 'description' => 'Unique page URL; starting with / is recommended.'],
                    ['name' => 'title', 'type' => 'string|null', 'description' => 'Optional browser-tab name.'],
                    ['name' => 'sections', 'type' => 'array', 'description' => 'Ordered section definitions and component placements.'],
                ],
                'relationship' => [
                    'page' => 'Owns metadata and sections.',
                    'section' => 'Belongs to a page and has an order.',
                    'component' => 'A reusable definition referenced by a section; the page does not redefine it.',
                ],
                'related' => ['page-structure', 'page-component-overrides', 'component-overview'],
            ],
            [
                'id' => 'page-structure',
                'title' => 'Page section and placement structure',
                'category' => 'page',
                'type' => 'schema',
                'summary' => 'The hierarchy used to place reusable components on a page.',
                'keywords' => ['sections', 'section order', 'components', 'placement', 'id', 'content_id'],
                'structure' => [
                    'sections[]' => [
                        'id' => 'Existing section identifier, used by update payloads.',
                        'order' => 'Required non-negative section order.',
                        'sp_class_list' => 'Optional persistent sp-style__* classes applied to the section container.',
                        'sp_style_list' => 'Optional persistent inline styles controlled by the section Wizard, currently background-color.',
                        'components' => 'Required array of component placements.',
                    ],
                    'sections[].components[]' => [
                        'id' => 'Existing global component identifier.',
                        'order' => 'Optional placement order.',
                        'content_id' => 'Existing component-section placement identifier when updating.',
                        'variables' => 'Required placement data array passed through to the component content/settings logic; use [] when the component has no variables.',
                        'content' => 'Optional map of variable names to page-specific values.',
                    ],
                ],
                'notes' => [
                    'A page payload references components by ID; it does not create or update global component definitions.',
                    'Every placement must include variables, using [] when the component has no variables. Consult component documentation to interpret non-empty variable data or settings.',
                ],
                'related' => ['page-overview', 'page-component-overrides', 'variable-contract'],
            ],
            [
                'id' => 'page-component-overrides',
                'title' => 'Page-specific component content',
                'category' => 'page',
                'type' => 'behavior',
                'summary' => 'A page can change the effective content of component variables for each placement.',
                'keywords' => ['content', 'override', 'variables', 'page-specific', 'placement', 'component'],
                'behavior' => [
                    'definition' => 'The global component keeps its reusable HTML and variable definition.',
                    'placement' => 'A section references the component and stores placement-specific content.',
                    'override' => 'The component placement content map uses variable names as keys and values for that page.',
                    'rendering' => 'The page renderer combines the component defaults with the placement content and resolves the component according to its own type contract.',
                ],
                'example' => [
                    'id' => 42,
                    'content' => [
                        'headline' => 'About our team',
                        'cta_link' => '/contact',
                    ],
                ],
                'notes' => [
                    'This tool does not define whether a variable is text, resource, datasource, or another type.',
                    'Use ComponentDocsTool and its specialized tools for the component variable contract.',
                ],
                'related' => ['page-structure', 'component-overview', 'variable-contract'],
            ],
            [
                'id' => 'page-metadata',
                'title' => 'Page metadata',
                'category' => 'page',
                'type' => 'fields',
                'summary' => 'The name, browser-tab title, and URL fields that identify a page.',
                'keywords' => ['name', 'title', 'tab', 'browser', 'url', 'route', 'slash', 'unique'],
                'fields' => [
                    [
                        'name' => 'name',
                        'required' => true,
                        'unique' => true,
                        'description' => 'Human-readable unique page name.',
                    ],
                    [
                        'name' => 'title',
                        'required' => false,
                        'nullable' => true,
                        'description' => 'Optional text used as the browser-tab name.',
                    ],
                    [
                        'name' => 'url',
                        'required' => true,
                        'unique' => true,
                        'description' => 'Unique route or URL. Starting with / is recommended, but the current requests do not enforce it.',
                    ],
                ],
                'related' => ['page-overview', 'create-page-payload', 'update-page-payload'],
            ],
        ];
    }

    protected function searchInstructions(): array
    {
        return [
            'query_examples' => [
                'page sections',
                'page URL',
                'component content override',
                'browser title',
            ],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Use component documentation tools for internal variable types and settings; use this tool for their placement on pages.',
        ];
    }
}
