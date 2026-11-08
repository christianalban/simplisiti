<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class ComponentDocsTool extends Tool
{
    use SearchableDocumentation;

    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Provides the shared, read-only documentation for Simplisiti components.

A component is a reusable content block placed inside one or more sections of a page. Its HTML is the reusable template, while its named variables allow each page or section to customize content without changing that template. It may also contain CSS and JavaScript that belong only to that component. Use this tool for concepts shared by creation, update, and other component workflows.

Use `CreateComponenteDocsTool` for creation-specific payloads and variable types, and `UpdateComponentDocsTool` for update-specific validation and behavior. Use `ComponentDocsTool` first when you need the component model, component assets, the component-to-section-to-page relationship, or the common variable contract.

### Searching

- Omit `query` to receive a compact index of the shared concepts.
- Provide one or more case-insensitive partial terms to receive detailed matching concepts.
- Search terms can be a concept, field, relationship, or phrase such as `component`, `section page`, `variable contract`, or `applied settings`.

### Response structure

The tool returns JSON with `mode`, `query`, `total`, `results`, `suggestions`, and `search`. Index results are compact; search results include the matching document's stable `id`, title, category, summary, keywords, structured fields, examples, notes, and related concept IDs. This tool is deterministic and does not read or modify database records.
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
                'id' => 'component-overview',
                'title' => 'Component overview',
                'category' => 'component',
                'type' => 'concept',
                'summary' => 'A reusable content block placed in page sections and customized through variables.',
                'keywords' => ['component', 'reusable', 'content block', 'html', 'styles', 'scripts', 'css', 'javascript', 'variable', 'section', 'page'],
                'definition' => 'A component combines an HTML template with named variables and optional component-scoped CSS and JavaScript. The same component can be placed in multiple sections, while each page or section can provide different values for those variables.',
                'fields' => [
                    [
                        'name' => 'name',
                        'type' => 'string',
                        'description' => 'The component identifier used when selecting the reusable block.',
                    ],
                    [
                        'name' => 'html',
                        'type' => 'string',
                        'description' => 'The reusable HTML template where variable names are referenced.',
                    ],
                    [
                        'name' => 'styles',
                        'type' => 'string|null',
                        'description' => 'Optional raw CSS source loaded only on pages that contain the component and wrapped under its generated CSS-safe class.',
                    ],
                    [
                        'name' => 'scripts',
                        'type' => 'string|null',
                        'description' => 'Optional raw JavaScript source emitted inline only on pages that contain the component.',
                    ],
                    [
                        'name' => 'variables',
                        'type' => 'array|null',
                        'description' => 'Variable definitions that make parts of the template configurable.',
                    ],
                ],
                'relationship' => [
                    'component' => 'Defines the reusable HTML and variable schema.',
                    'section' => 'Places a component on a page and stores its order, content overrides, and applied settings in the component-section pivot.',
                    'page' => 'Contains sections; different pages can customize the same component independently through their section content.',
                ],
                'workflow' => [
                    'definition' => 'Create or update the reusable component definition.',
                    'assets' => 'Store optional styles and scripts with the component; they are deduplicated per component definition when a page is rendered.',
                    'placement' => 'Attach the component to one or more page sections.',
                    'customization' => 'Set variable content and applied settings per placement without changing the component definition.',
                ],
                'related' => ['component-assets', 'component-placement', 'variable-contract'],
            ],
            [
                'id' => 'component-assets',
                'title' => 'Component styles and scripts',
                'category' => 'component',
                'type' => 'assets',
                'summary' => 'Optional CSS and JavaScript stored with a component and loaded only when that component is present on a page.',
                'keywords' => ['styles', 'scripts', 'css', 'javascript', 'assets', 'inline', 'scoped', 'deduplicate', 'component class'],
                'fields' => [
                    [
                        'name' => 'styles',
                        'type' => 'string|null',
                        'description' => 'Raw CSS source. At render time it is enclosed in a CSS-safe .component-* class matching the component wrapper.',
                    ],
                    [
                        'name' => 'scripts',
                        'type' => 'string|null',
                        'description' => 'Raw JavaScript source emitted as an inline script on pages containing the component.',
                    ],
                ],
                'behavior' => [
                    'scope' => 'Assets are page-specific: global styles and scripts are not loaded unless their own global resources are active.',
                    'deduplication' => 'When a component appears more than once on one page, its styles and scripts are added once per component definition.',
                    'css' => 'The renderer wraps the supplied CSS under a sanitized class derived from the component name, and the HTML wrapper uses the same class.',
                    'javascript' => 'The supplied source is emitted inline after global and plugin script references.',
                ],
                'notes' => [
                    'Use raw CSS declarations or nested CSS rules appropriate for the generated component wrapper.',
                    'Component asset source is not a page placement override; updating it changes every page that uses the component.',
                ],
                'related' => ['component-overview', 'component-placement'],
            ],
            [
                'id' => 'component-placement',
                'title' => 'Component placement in sections and pages',
                'category' => 'component',
                'type' => 'relationship',
                'summary' => 'The same component definition can be reused in multiple sections and customized per page placement.',
                'keywords' => ['section', 'page', 'placement', 'pivot', 'content override', 'applied settings', 'order'],
                'structure' => [
                    'component' => 'Reusable definition containing name, HTML, and variables.',
                    'section' => 'A page area that references components and controls their order.',
                    'page' => 'The page containing sections; each placement can have independent variable content.',
                    'pivot' => ['order', 'content', 'applied_settings'],
                ],
                'notes' => [
                    'Changing a component definition changes the reusable template for every placement.',
                    'Placement-specific content and applied settings belong to the section relationship, not to the component definition.',
                ],
                'related' => ['component-overview', 'variable-contract'],
            ],
            [
                'id' => 'variable-contract',
                'title' => 'Common variable contract',
                'category' => 'variable',
                'type' => 'concept',
                'summary' => 'The shared fields that define how a component variable is named, configured, stored, and resolved.',
                'keywords' => ['variable', 'type', 'name', 'default', 'options', 'value', 'settings', 'applied settings'],
                'fields' => [
                    [
                        'name' => 'type',
                        'type' => 'string',
                        'description' => 'Selects the input and value parser for the variable.',
                    ],
                    [
                        'name' => 'name',
                        'type' => 'string',
                        'description' => 'Stable key referenced by the HTML template and placement overrides.',
                    ],
                    [
                        'name' => 'default',
                        'type' => 'mixed|null',
                        'description' => 'Base value stored in the component definition.',
                    ],
                    [
                        'name' => 'options',
                        'type' => 'mixed|null',
                        'description' => 'Optional control configuration, when supported by the variable type and workflow.',
                    ],
                    [
                        'name' => 'settings',
                        'type' => 'array|null',
                        'description' => 'Available settings menus, especially for datasource variables.',
                    ],
                    [
                        'name' => 'applied_settings',
                        'type' => 'array|null',
                        'description' => 'Settings selected for a specific component placement.',
                    ],
                    [
                        'name' => 'value',
                        'type' => 'mixed',
                        'description' => 'Resolved value produced from defaults, placement overrides, settings, and the variable parser.',
                    ],
                ],
                'lifecycle' => [
                    'definition' => 'The component stores the variable schema and its default value.',
                    'override' => 'A section placement can provide content that replaces or merges with the default.',
                    'resolution' => 'The renderer parses the effective value according to the variable type.',
                ],
                'notes' => [
                    'Keep variable names stable because both the HTML template and placement content refer to them by name.',
                    'Creation and update tools have different allowed type lists; consult their specialized documentation before sending a payload.',
                ],
                'related' => ['component-overview', 'component-placement'],
            ],
        ];
    }

    protected function searchInstructions(): array
    {
        return [
            'query_examples' => [
                'component',
                'component assets',
                'styles scripts',
                'section page',
                'variable contract',
                'applied settings',
            ],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Use a relationship or field name when you need a focused explanation of the shared component model.',
        ];
    }
}
