<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class UpdateComponentDocsTool extends Tool
{
    use SearchableDocumentation;

    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Provides read-only documentation for updating existing Simplisiti components.

Use this tool before `UpdateComponentTool` when an agent needs update-specific rules, the required `component_id`, the complete payload shape, component asset behavior, settings behavior, or the differences from creation. Use `ComponentDocsTool` for shared component concepts, assets, and the common variable contract; this tool links to those concepts instead of duplicating them.

### Searching

- Omit `query` to receive a compact index of update concepts.
- Provide one or more case-insensitive partial terms to receive detailed matching concepts.
- Useful queries include `component_id`, `full payload`, `unique name`, `allowed types`, `settings preservation`, and `creation versus update`.

### Response structure

The tool returns JSON with `mode`, `query`, `total`, `results`, `suggestions`, and `search`. Index results are compact; search results include stable IDs, structured validation details, examples, notes, and related IDs. This tool is deterministic and does not read or modify database records.
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
                'id' => 'update-component-overview',
                'title' => 'Update component overview',
                'category' => 'update',
                'type' => 'workflow',
                'summary' => 'Updates an existing component by replacing its definition with a complete validated payload, including optional component assets.',
                'keywords' => ['update', 'component', 'existing', 'full payload', 'complete', 'styles', 'scripts', 'css', 'javascript', 'controller'],
                'workflow' => [
                    'identify' => 'Use AvailableComponentsTool or another read-only source to obtain the component_id.',
                    'submit' => 'Send component_id, name, html, the optional styles and scripts strings, and the complete variables array to UpdateComponentTool.',
                    'persist' => 'UpdateComponentAction applies settings, persists the component, and dispatches ComponentUpdated.',
                ],
                'not_for' => [
                    'new component' => 'Use CreateComponentTool.',
                    'shared concepts' => 'Use ComponentDocsTool.',
                    'partial patch' => 'The update tool is not a PATCH operation.',
                ],
                'related' => ['component-overview', 'component-assets', 'component-placement', 'update-payload'],
            ],
            [
                'id' => 'update-payload',
                'title' => 'Complete update payload',
                'category' => 'update',
                'type' => 'schema',
                'summary' => 'The fields required by the MCP update tool and their roles.',
                'keywords' => ['payload', 'component_id', 'name', 'html', 'styles', 'scripts', 'variables', 'full update', 'complete'],
                'fields' => [
                    [
                        'name' => 'component_id',
                        'type' => 'integer',
                        'required' => true,
                        'description' => 'Existing component identifier. It is resolved before the name uniqueness rule is built.',
                    ],
                    [
                        'name' => 'name',
                        'type' => 'string',
                        'required' => true,
                        'constraints' => ['max' => 255, 'unique_except_current_component' => true],
                    ],
                    [
                        'name' => 'html',
                        'type' => 'string',
                        'required' => true,
                        'description' => 'Complete reusable HTML structure.',
                    ],
                    [
                        'name' => 'styles',
                        'type' => 'string|null',
                        'required' => false,
                        'nullable' => true,
                        'description' => 'Optional raw CSS source. Include it to replace stored CSS or omit it to preserve the current value.',
                    ],
                    [
                        'name' => 'scripts',
                        'type' => 'string|null',
                        'required' => false,
                        'nullable' => true,
                        'description' => 'Optional raw JavaScript source. Include it to replace stored JavaScript or omit it to preserve the current value.',
                    ],
                    [
                        'name' => 'variables',
                        'type' => 'array',
                        'required' => true,
                        'description' => 'Required complete current variable definition array; use [] when the component has no variables.',
                    ],
                ],
                'example' => [
                    'component_id' => 12,
                    'name' => 'hero/banner',
                    'html' => '<section><h1>{{title}}</h1></section>',
                    'variables' => [
                        [
                            'type' => 'text',
                            'name' => 'title',
                            'default' => 'Updated title',
                        ],
                    ],
                ],
                'related' => ['component-overview', 'component-assets', 'variable-contract', 'update-validation'],
            ],
            [
                'id' => 'update-validation',
                'title' => 'Update validation rules',
                'category' => 'validation',
                'type' => 'rules',
                'summary' => 'Validation applied by UpdateComponentTool before UpdateComponentAction runs.',
                'keywords' => ['validation', 'required', 'unique', 'ignore', 'nested', 'error', 'field path'],
                'rules' => [
                    'component_id' => ['required', 'integer', 'exists:components,id'],
                    'name' => ['required', 'string', 'max:255', 'unique except current component'],
                    'html' => ['required', 'string'],
                    'styles' => ['nullable', 'string'],
                    'scripts' => ['nullable', 'string'],
                    'variables' => ['required', 'array'],
                    'variables.*.type' => ['required', 'in:text,number,tel,email,url,password,checkbox,radio,date,time,datetime-local,month,week,color,resource,datatable,textarea,select,datasource,action,page,link,upload_file,action_button'],
                    'variables.*.name' => ['required', 'string', 'max:255'],
                    'variables.*.default' => ['nullable'],
                    'variables.*.settings' => ['nullable'],
                    'variables.*.settings.*.items' => ['nullable'],
                    'variables.*.settings.*.items.*.name' => ['required'],
                    'variables.*.settings.*.items.*.plugin' => ['required'],
                    'variables.*.settings.*.items.*.value' => ['required'],
                ],
                'errors' => 'Validation messages retain paths such as component_id, variables.0.type, and variables.0.settings.0.items.1.value so the invalid value can be corrected precisely.',
                'related' => ['update-payload', 'update-variable-types'],
            ],
            [
                'id' => 'update-variable-types',
                'title' => 'Variable types accepted during update',
                'category' => 'compatibility',
                'type' => 'compatibility',
                'summary' => 'The update request accepts the complete VariableType list used by the component model.',
                'keywords' => ['types', 'allowed', 'compatibility', 'creation', 'update', 'month', 'week', 'link', 'upload_file', 'action_button'],
                'accepted_by_update' => [
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
                    'action_button',
                ],
                'notes' => [
                    'Creation and update use the same VariableType values.',
                    'The list is synchronized with VariableType in the frontend type definitions.',
                ],
                'related' => ['variable-contract', 'update-validation', 'update-create-difference'],
            ],
            [
                'id' => 'update-settings',
                'title' => 'Settings and applied settings during update',
                'category' => 'settings',
                'type' => 'behavior',
                'summary' => 'UpdateComponentAction transforms datasource and resource settings while preserving existing applied settings when no replacement is supplied.',
                'keywords' => ['settings', 'applied settings', 'datasource', 'resource', 'preserve', 'HandleSettings', 'items'],
                'input' => [
                    'settings' => 'An optional array of menus. Each menu contains items with required name, plugin, and value fields.',
                    'applied_settings' => 'Existing applied settings are read from the stored variable and are preserved when the update variable has no settings field.',
                ],
                'behavior' => [
                    'datasource' => 'The supplied setting items become applied settings with plugin, name, and a nested value object.',
                    'resource' => 'The supplied setting items are appended to applied settings.',
                    'other types' => 'Settings are not transformed by the action.',
                    'persistence' => 'The temporary settings field is removed before the component is persisted.',
                ],
                'example' => [
                    'type' => 'datasource',
                    'name' => 'latest_posts',
                    'default' => 'vendor.package:posts',
                    'settings' => [
                        [
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
                'related' => ['variable-contract', 'update-validation'],
            ],
            [
                'id' => 'update-create-difference',
                'title' => 'Creation versus update',
                'category' => 'workflow',
                'type' => 'comparison',
                'summary' => 'Creation and update use related but different contracts.',
                'keywords' => ['creation', 'update', 'difference', 'CreateComponentTool', 'UpdateComponentTool', 'types', 'identifier'],
                'differences' => [
                    'identifier' => 'Creation has no component_id and requires a unique new name; update requires an existing component_id and ignores that component when checking name uniqueness.',
                    'payload' => 'Creation sends a new definition; update replaces an existing definition with the complete current payload. Styles and scripts can be replaced when supplied and preserved when omitted.',
                    'types' => 'Creation and update accept the same complete VariableType list.',
                    'action' => 'Creation uses StoreComponentAction; update uses UpdateComponentAction and preserves or transforms applied settings.',
                ],
                'related' => ['component-overview', 'component-assets', 'update-component-overview', 'update-variable-types'],
            ],
        ];
    }

    protected function searchInstructions(): array
    {
        return [
            'query_examples' => [
                'component_id',
                'full payload',
                'styles scripts',
                'unique name',
                'allowed types',
                'settings preservation',
                'creation versus update',
            ],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Use a specific update field or behavior to receive a focused response.',
        ];
    }
}
