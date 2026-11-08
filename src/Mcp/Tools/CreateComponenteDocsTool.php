<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class CreateComponenteDocsTool extends Tool
{
    use SearchableDocumentation;

    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Provides read-only documentation for creating and configuring Simplisiti components.

A component is a reusable content block placed inside sections of a page. Its variables allow the same component to expose different content on each page or section where it is used. Use `ComponentDocsTool` for the shared component model and variable contract; use this tool for creation-specific variable types, defaults, options, settings, and nested data structures.

Use `CreateComponentTool` to create a component. Do not use this documentation tool to update, list, clone, or delete an existing component.

The creation request allows `variables` to be omitted or set to `null`; when supplied, it must be an array of complete variable definitions. Use `UpdateComponentDocsTool` for the stricter update contract, where `variables` is required and must be an array.

### Searching

- Omit `query` to receive a compact index of all documented concepts.
- Provide one or more terms in `query` to receive detailed matching concepts. Search terms may be a component concept, variable type, field name, structure name, or related phrase such as `datatable`, `datasource settings`, `resource default`, or `variable options`.
- Searches are case-insensitive and support partial terms. Use focused queries to reduce the amount of documentation returned.

### Response structure

The tool always returns JSON with:

- `mode`: `index` when no query is provided, or `search` when a query is provided.
- `query`: the normalized query, or `null` for the index.
- `total`: the number of returned concepts.
- `results`: compact concept entries in index mode and detailed documentation entries in search mode.
- `suggestions`: alternative concept matches when a search has no results.
- `search`: guidance for forming another focused query.

Detailed entries include a stable `id`, `title`, `category`, `summary`, `keywords`, structured fields or type definitions, examples, notes, and related concept IDs. This tool is deterministic and does not read or modify database records.
MARKDOWN;

    /**
     * Handle the tool request.
     */
    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->documents());
    }

    /**
     * Get the tool's input schema.
     *
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return $this->documentationSchema($schema);
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function documents(): array
    {
        return [
            [
                'id' => 'create-component-contract',
                'title' => 'Create component payload contract',
                'category' => 'create',
                'type' => 'schema',
                'summary' => 'Creation accepts component metadata and an optional nullable variable definition array.',
                'keywords' => ['create', 'payload', 'name', 'html', 'variables', 'optional', 'nullable', 'validation'],
                'fields' => [
                    [
                        'name' => 'name',
                        'type' => 'string',
                        'required' => true,
                        'constraints' => ['max' => 255, 'unique' => true],
                    ],
                    [
                        'name' => 'html',
                        'type' => 'string',
                        'required' => true,
                        'description' => 'Complete reusable HTML structure.',
                    ],
                    [
                        'name' => 'variables',
                        'type' => 'array|null',
                        'required' => false,
                        'nullable' => true,
                        'description' => 'Optional variable definition array. Omit it or send null when the component has no variable definitions.',
                    ],
                ],
                'rules' => [
                    'variables' => ['nullable', 'array'],
                    'variables.*.type' => ['required', 'in:text,number,tel,email,url,password,checkbox,radio,date,time,datetime-local,month,week,color,resource,datatable,textarea,select,datasource,action,page,link,upload_file'],
                    'variables.*.name' => ['required', 'string', 'max:255'],
                ],
                'notes' => [
                    'This nullable creation contract differs from component updates, where variables is required because the update action processes the array directly.',
                    'Use [] when you prefer to make the absence of variable definitions explicit.',
                ],
                'related' => ['component-overview', 'variable-contract', 'variable-basic-inputs'],
            ],
            [
                'id' => 'variable-basic-inputs',
                'title' => 'Basic HTML input variable types',
                'category' => 'variable-type',
                'type' => 'basic',
                'summary' => 'Primitive variables rendered with standard HTML input controls.',
                'keywords' => [
                    'basic',
                    'html input',
                    'text',
                    'number',
                    'tel',
                    'email',
                    'url',
                    'password',
                    'checkbox',
                    'radio',
                    'date',
                    'time',
                    'datetime-local',
                    'color',
                ],
                'types' => [
                    [
                        'type' => 'text',
                        'html_input' => 'input[type=text]',
                        'value' => 'string',
                        'description' => 'Short text content.',
                    ],
                    [
                        'type' => 'number',
                        'html_input' => 'input[type=number]',
                        'value' => 'numeric input value',
                        'description' => 'A numeric field rendered with a step of 0.01 by the UI.',
                    ],
                    [
                        'type' => 'tel',
                        'html_input' => 'input[type=tel]',
                        'value' => 'string',
                        'description' => 'Telephone number or other phone-formatted text.',
                    ],
                    [
                        'type' => 'email',
                        'html_input' => 'input[type=email]',
                        'value' => 'string',
                        'description' => 'Email address input.',
                    ],
                    [
                        'type' => 'url',
                        'html_input' => 'input[type=url]',
                        'value' => 'string',
                        'description' => 'URL input.',
                    ],
                    [
                        'type' => 'password',
                        'html_input' => 'input[type=password]',
                        'value' => 'string',
                        'description' => 'Password-like text input.',
                    ],
                    [
                        'type' => 'checkbox',
                        'html_input' => 'input[type=checkbox]',
                        'value' => '1 or 0',
                        'description' => 'Boolean-like toggle. The UI emits 1 when checked and 0 when unchecked.',
                    ],
                    [
                        'type' => 'radio',
                        'html_input' => 'input[type=radio]',
                        'value' => '1 or 0',
                        'description' => 'Boolean-like radio control. The UI emits 1 when selected and 0 when not selected.',
                    ],
                    [
                        'type' => 'date',
                        'html_input' => 'input[type=date]',
                        'value' => 'date string',
                        'description' => 'Date input.',
                    ],
                    [
                        'type' => 'time',
                        'html_input' => 'input[type=time]',
                        'value' => 'time string',
                        'description' => 'Time input.',
                    ],
                    [
                        'type' => 'datetime-local',
                        'html_input' => 'input[type=datetime-local]',
                        'value' => 'datetime string',
                        'description' => 'Local date and time input.',
                    ],
                    [
                        'type' => 'color',
                        'html_input' => 'input[type=color]',
                        'value' => 'color string',
                        'description' => 'Color input, normally represented as a color value such as a hex string.',
                    ],
                ],
                'example' => [
                    'type' => 'email',
                    'name' => 'contact_email',
                    'default' => 'team@example.com',
                ],
                'related' => ['variable-contract', 'variable-select', 'variable-textarea'],
            ],
            [
                'id' => 'variable-select',
                'title' => 'Select variable',
                'category' => 'variable-type',
                'type' => 'specialized',
                'summary' => 'A select control whose options are supplied through the variable options array.',
                'keywords' => ['select', 'dropdown', 'options', 'label', 'value'],
                'fields' => [
                    [
                        'name' => 'type',
                        'value' => 'select',
                        'description' => 'Selects the specialized select control.',
                    ],
                    [
                        'name' => 'options',
                        'type' => 'array',
                        'description' => 'Array of option objects with string label and value fields.',
                    ],
                    [
                        'name' => 'default',
                        'type' => 'string|null',
                        'description' => 'The option value selected by default.',
                    ],
                ],
                'example' => [
                    'type' => 'select',
                    'name' => 'theme',
                    'default' => 'dark',
                    'options' => [
                        ['label' => 'Light', 'value' => 'light'],
                        ['label' => 'Dark', 'value' => 'dark'],
                    ],
                ],
                'related' => ['variable-contract', 'variable-basic-inputs'],
            ],
            [
                'id' => 'variable-textarea',
                'title' => 'Textarea variable',
                'category' => 'variable-type',
                'type' => 'specialized',
                'summary' => 'Long-form text content edited with the rich text editor or as plain text.',
                'keywords' => ['textarea', 'rich text', 'editor', 'plain_content', 'content'],
                'fields' => [
                    [
                        'name' => 'type',
                        'value' => 'textarea',
                        'description' => 'Selects the textarea/rich text control.',
                    ],
                    [
                        'name' => 'default',
                        'type' => 'string|null',
                        'description' => 'Initial text or HTML content.',
                    ],
                    [
                        'name' => 'options.plain_content',
                        'type' => 'boolean',
                        'description' => 'When true, the UI uses a plain textarea; otherwise it uses the rich text editor.',
                    ],
                ],
                'example' => [
                    'type' => 'textarea',
                    'name' => 'body',
                    'default' => '<p>Editable content</p>',
                    'options' => [
                        'plain_content' => false,
                    ],
                ],
                'related' => ['variable-contract', 'variable-basic-inputs'],
            ],
            [
                'id' => 'variable-resource',
                'title' => 'Resource variable',
                'category' => 'variable-type',
                'type' => 'complex',
                'summary' => 'References a stored Simplisiti resource and resolves its stored path to a public URL.',
                'keywords' => ['resource', 'asset', 'file', 'image', 'video', 'resource id', 'url'],
                'fields' => [
                    [
                        'name' => 'type',
                        'value' => 'resource',
                        'description' => 'Selects the resource picker.',
                    ],
                    [
                        'name' => 'default',
                        'type' => 'integer|null',
                        'description' => 'Resource ID selected from the resource library.',
                    ],
                ],
                'resolution' => 'ResourceValue looks up the resource by ID and returns its storage URL. If the resource cannot be found, the resolved value is an empty string.',
                'example' => [
                    'type' => 'resource',
                    'name' => 'hero_image',
                    'default' => 42,
                ],
                'related' => ['variable-contract', 'component-overview'],
            ],
            [
                'id' => 'variable-datatable',
                'title' => 'Datatable variable',
                'category' => 'variable-type',
                'type' => 'complex',
                'summary' => 'A recursive table value with named columns and rows containing variables.',
                'keywords' => ['datatable', 'table', 'columns', 'rows', 'recursive', 'nested'],
                'structure' => [
                    'default' => [
                        'columns' => [
                            [
                                'name' => 'title',
                                'type' => 'text',
                            ],
                            [
                                'name' => 'amount',
                                'type' => 'number',
                            ],
                        ],
                        'rows' => [
                            [
                                [
                                    'name' => 'title',
                                    'type' => 'text',
                                    'default' => 'Item',
                                ],
                                [
                                    'name' => 'amount',
                                    'type' => 'number',
                                    'default' => 10,
                                ],
                            ],
                        ],
                    ],
                    'columns' => 'Array of column definitions. Each column has a name and a variable type.',
                    'rows' => 'Array of rows. Each row contains variables matching the column structure.',
                    'nested_datatable' => 'A datatable variable can appear inside a row and recursively contain its own columns and rows.',
                ],
                'resolution' => 'DataTableValue recursively parses row variables and returns row data keyed by variable name while preserving the table structure for content merging.',
                'example' => [
                    'type' => 'datatable',
                    'name' => 'products',
                    'default' => [
                        'columns' => [
                            ['name' => 'title', 'type' => 'text'],
                            ['name' => 'price', 'type' => 'number'],
                        ],
                        'rows' => [
                            [
                                ['name' => 'title', 'type' => 'text', 'default' => 'Product'],
                                ['name' => 'price', 'type' => 'number', 'default' => 9.99],
                            ],
                        ],
                    ],
                ],
                'related' => ['variable-contract', 'datatable-structure'],
            ],
            [
                'id' => 'datatable-structure',
                'title' => 'Datatable structure',
                'category' => 'structure',
                'type' => 'schema',
                'summary' => 'The columns and rows schema required to describe a datatable value.',
                'keywords' => ['datatable', 'structure', 'schema', 'columns', 'rows', 'cell', 'nested datatable'],
                'fields' => [
                    [
                        'name' => 'columns[].name',
                        'type' => 'string',
                        'description' => 'Column key shared by every row variable in that column.',
                    ],
                    [
                        'name' => 'columns[].type',
                        'type' => 'variable type',
                        'description' => 'Type used to edit and parse each cell.',
                    ],
                    [
                        'name' => 'rows[][]',
                        'type' => 'array of variable objects',
                        'description' => 'Each cell is represented by a variable object with name, type, and default.',
                    ],
                ],
                'example' => [
                    'columns' => [
                        ['name' => 'name', 'type' => 'text'],
                        ['name' => 'enabled', 'type' => 'checkbox'],
                    ],
                    'rows' => [
                        [
                            ['name' => 'name', 'type' => 'text', 'default' => 'First'],
                            ['name' => 'enabled', 'type' => 'checkbox', 'default' => 1],
                        ],
                    ],
                ],
                'related' => ['variable-datatable', 'variable-contract'],
            ],
            [
                'id' => 'variable-datasource',
                'title' => 'Datasource variable',
                'category' => 'variable-type',
                'type' => 'complex',
                'summary' => 'Connects a component variable to a registered datasource and optional runtime settings.',
                'keywords' => ['datasource', 'data source', 'source', 'plugin', 'settings', 'applied settings', 'data'],
                'fields' => [
                    [
                        'name' => 'type',
                        'value' => 'datasource',
                        'description' => 'Selects the datasource value parser.',
                    ],
                    [
                        'name' => 'default',
                        'type' => 'string',
                        'description' => 'Datasource key selected from the registered datasource list.',
                    ],
                    [
                        'name' => 'settings',
                        'type' => 'array',
                        'description' => 'Available settings menus. Each menu contains items with name, plugin, and value, plus optional labels and descriptions.',
                    ],
                    [
                        'name' => 'applied_settings',
                        'type' => 'array',
                        'description' => 'Settings selected for a specific component placement.',
                    ],
                ],
                'settings_structure' => [
                    'menu' => [
                        'label' => 'Optional group label.',
                        'description' => 'Optional group description.',
                        'items' => [
                            [
                                'name' => 'setting_name',
                                'plugin' => 'plugin.identifier',
                                'value' => 'selected value',
                            ],
                        ],
                    ],
                ],
                'resolution' => 'DataSourceValue resolves the datasource through the datasource manager, applies selected settings, and can return datasource data when rendering with data enabled.',
                'example' => [
                    'type' => 'datasource',
                    'name' => 'latest_posts',
                    'default' => 'vendor.package:posts',
                    'settings' => [
                        [
                            'label' => 'Filters',
                            'items' => [
                                [
                                    'name' => 'limit',
                                    'plugin' => 'vendor.package',
                                    'value' => 5,
                                ],
                            ],
                        ],
                    ],
                ],
                'related' => ['variable-contract', 'settings-structure'],
            ],
            [
                'id' => 'settings-structure',
                'title' => 'Variable settings structure',
                'category' => 'structure',
                'type' => 'schema',
                'summary' => 'The menu and item shape used to describe configurable datasource settings.',
                'keywords' => ['settings', 'setting menu', 'items', 'plugin', 'value', 'label', 'description', 'datasource'],
                'fields' => [
                    [
                        'name' => 'settings',
                        'type' => 'array',
                        'description' => 'Array of setting menu objects.',
                    ],
                    [
                        'name' => 'settings[].items',
                        'type' => 'array',
                        'description' => 'Array of setting items inside a menu.',
                    ],
                    [
                        'name' => 'settings[].items[].name',
                        'type' => 'mixed',
                        'required' => true,
                        'description' => 'Setting key validated by StoreComponentRequest.',
                    ],
                    [
                        'name' => 'settings[].items[].plugin',
                        'type' => 'mixed',
                        'required' => true,
                        'description' => 'Plugin identifier validated by StoreComponentRequest.',
                    ],
                    [
                        'name' => 'settings[].items[].value',
                        'type' => 'mixed',
                        'required' => true,
                        'description' => 'Selected setting value validated by StoreComponentRequest.',
                    ],
                ],
                'notes' => [
                    'Menu label and description, and item metadata such as label, type, required, and options may be stored when supplied.',
                    'The creation request requires item name, plugin, and value through nested validation paths.',
                ],
                'example' => [
                    [
                        'label' => 'Filters',
                        'description' => 'Datasource filters',
                        'items' => [
                            [
                                'name' => 'limit',
                                'plugin' => 'vendor.package',
                                'value' => 10,
                            ],
                        ],
                    ],
                ],
                'related' => ['variable-datasource', 'variable-contract'],
            ],
            [
                'id' => 'variable-action',
                'title' => 'Action variable',
                'category' => 'variable-type',
                'type' => 'complex',
                'summary' => 'References a registered action by name for component content or interactions.',
                'keywords' => ['action', 'flow', 'behavior', 'action name'],
                'fields' => [
                    [
                        'name' => 'type',
                        'value' => 'action',
                        'description' => 'Selects the action control.',
                    ],
                    [
                        'name' => 'default',
                        'type' => 'string|null',
                        'description' => 'Action name selected from the registered action list.',
                    ],
                ],
                'resolution' => 'ActionValue currently returns the selected default or override value without transforming it.',
                'example' => [
                    'type' => 'action',
                    'name' => 'on_submit',
                    'default' => 'send-contact-form',
                ],
                'related' => ['variable-contract', 'component-overview'],
            ],
            [
                'id' => 'variable-page',
                'title' => 'Page variable',
                'category' => 'variable-type',
                'type' => 'complex',
                'summary' => 'References a page or route and resolves it to a URL when the route exists.',
                'keywords' => ['page', 'route', 'url', 'link', 'navigation'],
                'fields' => [
                    [
                        'name' => 'type',
                        'value' => 'page',
                        'description' => 'Selects the page control.',
                    ],
                    [
                        'name' => 'default',
                        'type' => 'string|null',
                        'description' => 'Route name selected for the page value.',
                    ],
                ],
                'resolution' => 'PageValue checks whether the route exists and returns the generated URL. Missing routes resolve to an empty string.',
                'example' => [
                    'type' => 'page',
                    'name' => 'cta_link',
                    'default' => 'pages.contact',
                ],
                'related' => ['variable-contract', 'component-overview'],
            ],
            [
                'id' => 'variable-type-compatibility',
                'title' => 'Variable type compatibility',
                'category' => 'compatibility',
                'type' => 'compatibility',
                'summary' => 'Documents the complete VariableType list accepted by the current component creation request.',
                'keywords' => ['compatibility', 'supported', 'store request', 'link', 'upload_file', 'ui'],
                'supported_by_creation' => [
                    'text',
                    'number',
                    'tel',
                    'email',
                    'url',
                    'password',
                    'checkbox',
                    'radio',
                    'date',
                    'time',
                    'datetime-local',
                    'month',
                    'week',
                    'color',
                    'resource',
                    'datatable',
                    'textarea',
                    'select',
                    'datasource',
                    'action',
                    'page',
                    'link',
                    'upload_file',
                ],
                'notes' => [
                    'Use any supported_by_creation type when constructing a payload for CreateComponentTool.',
                    'The list is synchronized with VariableType in the frontend type definitions.',
                ],
                'related' => ['variable-contract', 'component-overview'],
            ],
        ];
    }

}
