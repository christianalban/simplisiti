<?php

namespace Alban\Simplisiti\Mcp\Tools\Concerns;

use Illuminate\Contracts\JsonSchema\JsonSchema;

trait GlobalAssetDocumentation
{
    /**
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    protected function globalAssetDocumentationSchema(JsonSchema $schema): array
    {
        return $this->documentationSchema($schema);
    }

    /**
     * @return array<string, mixed>
     */
    protected function globalAssetSearchInstructions(string $asset, string $codeField): array
    {
        return [
            'query_examples' => [
                "{$asset} overview",
                "{$codeField} validation",
                'is_active',
                'order',
                'global loading',
            ],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => "Search for a field, lifecycle action, or {$asset} behavior. The result includes structured rules and examples.",
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function globalAssetDocuments(string $asset, string $codeField, string $language): array
    {
        $plural = "{$asset}s";
        $title = ucfirst($asset);

        return [
            [
                'id' => "{$asset}-overview",
                'title' => "{$title} overview",
                'category' => $asset,
                'type' => 'concept',
                'summary' => "A global {$language} resource loaded on every page when it is active.",
                'keywords' => [$asset, $plural, strtolower($language), 'global', 'page', 'active', 'inactive'],
                'definition' => "A {$asset} stores {$language} source code and applies it globally to every page. It is independent from pages and components. Set is_active to false to keep the record while preventing it from loading.",
                'fields' => [
                    ['name' => 'id', 'type' => 'integer', 'description' => "Unique {$asset} identifier."],
                    ['name' => 'name', 'type' => 'string', 'required' => true, 'max' => 255, 'unique' => true],
                    ['name' => $codeField, 'type' => 'string', 'required' => true, 'description' => "{$language} source code."],
                    ['name' => 'is_active', 'type' => 'boolean', 'required' => true, 'description' => 'Global loading switch.'],
                    ['name' => 'order', 'type' => 'integer', 'description' => 'Global loading order assigned at creation and changed by the order tool.'],
                ],
                'related' => ["{$asset}-activation", "{$asset}-ordering"],
            ],
            [
                'id' => "{$asset}-activation",
                'title' => "{$title} activation",
                'category' => $asset,
                'type' => 'behavior',
                'summary' => "is_active controls whether the {$language} is loaded globally.",
                'keywords' => ['is_active', 'active', 'inactive', 'disable', 'enable', 'global', 'loading'],
                'behavior' => [
                    'true' => "The {$language} code is loaded on every page.",
                    'false' => "The {$asset} remains stored and editable, but its code is not loaded on any page.",
                    'alternative' => "Use false to temporarily disable a resource; use the delete tool only when the definition should be removed permanently.",
                ],
                'related' => ["{$asset}-overview", "update-{$asset}-payload", "delete-{$asset}-behavior"],
            ],
            [
                'id' => "{$asset}-ordering",
                'title' => "{$title} ordering",
                'category' => $asset,
                'type' => 'behavior',
                'summary' => "Active {$language} resources are loaded in their persisted integer order.",
                'keywords' => ['order', 'ordering', 'sequence', 'load order', 'list', 'global'],
                'behavior' => [
                    'creation' => 'The create action assigns the next available order automatically.',
                    'update' => 'Changing source code or activation does not change order.',
                    'reorder' => "Use Order" . $title . "Tool with the complete list of IDs and target integer orders.",
                    'scope' => "The order is global, not specific to one page.",
                ],
                'related' => ["{$asset}-overview", "order-{$plural}-payload"],
            ],
            [
                'id' => "{$asset}-resource-response",
                'title' => "{$title} resource response",
                'category' => $asset,
                'type' => 'schema',
                'summary' => "Expanded {$asset} responses include the source code and activation metadata.",
                'keywords' => ['response', 'resource', 'id', 'name', $codeField, 'is_active', 'order'],
                'structure' => [
                    'id' => 'Integer identifier.',
                    'name' => 'Unique name.',
                    $codeField => "{$language} source code.",
                    'is_active' => 'Boolean global loading flag.',
                    'order' => 'Persisted order when available in listing metadata.',
                ],
                'notes' => [
                    "Available" . $title . "sTool omits source code without a query to reduce response size.",
                    'Use a name query when the complete resource representation is needed.',
                ],
                'related' => ["{$asset}-overview", "available-{$plural}-search"],
            ],
            [
                'id' => "available-{$plural}-search",
                'title' => "Available {$plural} search",
                'category' => 'available',
                'type' => 'workflow',
                'summary' => "Use the available {$plural} tool compactly by default and expand matching resources with query.",
                'keywords' => ['available', 'list', 'query', 'search', 'compact', 'expanded', $asset],
                'workflow' => [
                    'without_query' => "Returns id, name, is_active, and order for all {$plural}.",
                    'with_query' => "Performs a case-insensitive partial name search and returns complete matching {$plural}, including {$codeField}.",
                    'empty_query' => 'An omitted or blank query uses compact mode.',
                    'no_match' => 'A query with no matches returns an empty array.',
                ],
                'related' => ["{$asset}-resource-response", "update-{$asset}-payload"],
            ],
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function globalAssetCreateDocuments(string $asset, string $codeField, string $language): array
    {
        $title = ucfirst($asset);

        return [
            [
                'id' => "create-{$asset}-overview",
                'title' => "Create {$asset} workflow",
                'category' => 'create',
                'type' => 'workflow',
                'summary' => "Creates a global {$language} resource and assigns its next order.",
                'keywords' => ['create', $asset, 'store', 'global', 'order', 'transaction'],
                'workflow' => [
                    'prepare' => "Prepare a unique name, complete {$language} source code, and the required is_active boolean.",
                    'submit' => "Send the complete payload to Create" . $title . "Tool.",
                    'persist' => "Store" . $title . "Action saves the {$asset} and assigns the next order.",
                    'result' => "{$title} created successfully.",
                ],
                'related' => ["{$asset}-overview", "create-{$asset}-payload", "create-{$asset}-validation"],
            ],
            [
                'id' => "create-{$asset}-payload",
                'title' => "Create {$asset} payload",
                'category' => 'create',
                'type' => 'schema',
                'summary' => "The complete payload required to create a global {$asset}.",
                'keywords' => ['payload', 'name', $codeField, 'is_active', 'required', 'unique'],
                'fields' => [
                    ['name' => 'name', 'type' => 'string', 'required' => true, 'max' => 255, 'unique' => true],
                    ['name' => $codeField, 'type' => 'string', 'required' => true, 'description' => "{$language} source code."],
                    ['name' => 'is_active', 'type' => 'boolean', 'required' => true, 'description' => 'Whether the resource is loaded globally.'],
                ],
                'example' => [
                    'name' => "Brand {$title}",
                    $codeField => $language === 'CSS' ? '.brand { color: #123456; }' : 'window.appReady = true;',
                    'is_active' => true,
                ],
                'notes' => [
                    'Order is not supplied during creation; the action assigns it automatically.',
                    'Use false for is_active when the resource should be stored but not loaded.',
                ],
                'related' => ["{$asset}-activation", "create-{$asset}-validation"],
            ],
            [
                'id' => "create-{$asset}-validation",
                'title' => "Create {$asset} validation",
                'category' => 'validation',
                'type' => 'rules',
                'summary' => "Rules applied by Store" . $title . "Request before persistence.",
                'keywords' => ['validation', 'required', 'string', 'max', 'unique', 'boolean'],
                'rules' => [
                    'name' => ['required', 'string', 'max:255', "unique:{$asset}s"],
                    $codeField => ['required', 'string'],
                    'is_active' => ['required', 'boolean'],
                ],
                'notes' => [
                    "The request does not accept a client-supplied {$asset} order.",
                    'Validation failures must be corrected before the action runs.',
                ],
                'related' => ["create-{$asset}-payload", "{$asset}-ordering"],
            ],
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function globalAssetUpdateDocuments(string $asset, string $codeField, string $language): array
    {
        $title = ucfirst($asset);

        return [
            [
                'id' => "update-{$asset}-overview",
                'title' => "Update {$asset} workflow",
                'category' => 'update',
                'type' => 'workflow',
                'summary' => "Replaces an existing global {$language} resource using a complete payload.",
                'keywords' => ['update', $asset, 'edit', 'complete', 'patch', 'global'],
                'workflow' => [
                    'identify' => "Provide {$asset}_id for an existing {$asset}.",
                    'submit' => "Send {$asset}_id, name, {$codeField}, and is_active to Update" . $title . "Tool.",
                    'persist' => "Update" . $title . "Action updates the selected model; its order is preserved.",
                    'result' => "{$title} updated successfully.",
                ],
                'notes' => ['This MCP operation is not a partial PATCH; all mutable fields are required.'],
                'related' => ["{$asset}-overview", "update-{$asset}-payload", "update-{$asset}-validation"],
            ],
            [
                'id' => "update-{$asset}-payload",
                'title' => "Update {$asset} payload",
                'category' => 'update',
                'type' => 'schema',
                'summary' => "The complete payload required to update a global {$asset}.",
                'keywords' => ['payload', "{$asset}_id", 'name', $codeField, 'is_active', 'complete'],
                'fields' => [
                    ['name' => "{$asset}_id", 'type' => 'integer', 'required' => true, 'exists' => "{$asset}s,id"],
                    ['name' => 'name', 'type' => 'string', 'required' => true, 'max' => 255, 'unique' => "unique except current {$asset}"],
                    ['name' => $codeField, 'type' => 'string', 'required' => true, 'description' => "{$language} source code."],
                    ['name' => 'is_active', 'type' => 'boolean', 'required' => true],
                ],
                'example' => [
                    "{$asset}_id" => 7,
                    'name' => "Updated {$title}",
                    $codeField => $language === 'CSS' ? '.brand { color: #654321; }' : 'window.appReady = false;',
                    'is_active' => false,
                ],
                'related' => ["update-{$asset}-validation", "{$asset}-activation"],
            ],
            [
                'id' => "update-{$asset}-validation",
                'title' => "Update {$asset} validation",
                'category' => 'validation',
                'type' => 'rules',
                'summary' => "Rules applied by Update" . $title . "Request with uniqueness scoped around the current model.",
                'keywords' => ['validation', 'required', 'integer', 'exists', 'unique', 'ignore', 'boolean'],
                'rules' => [
                    "{$asset}_id" => ['required', 'integer', "exists:{$asset}s,id"],
                    'name' => ['required', 'string', 'max:255', "unique:{$asset}s ignoring current model"],
                    $codeField => ['required', 'string'],
                    'is_active' => ['required', 'boolean'],
                ],
                'notes' => [
                    "The current {$asset} may retain its existing name because uniqueness ignores that model.",
                    'The identifier is resolved before the update action executes.',
                ],
                'related' => ["update-{$asset}-payload", "{$asset}-ordering"],
            ],
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function globalAssetDeleteDocuments(string $asset, string $codeField, string $language): array
    {
        $title = ucfirst($asset);

        return [
            [
                'id' => "delete-{$asset}-overview",
                'title' => "Delete {$asset} workflow",
                'category' => 'delete',
                'type' => 'workflow',
                'summary' => "Permanently removes a global {$language} resource.",
                'keywords' => ['delete', $asset, 'destroy', 'remove', 'permanent', 'destructive'],
                'workflow' => [
                    'identify' => "Provide {$asset}_id for an existing {$asset}.",
                    'confirm' => "Use deletion only when the {$asset} definition should no longer exist.",
                    'persist' => "Delete" . $title . "Action removes the selected model.",
                    'result' => "{$title} deleted successfully.",
                ],
                'related' => ["delete-{$asset}-behavior", "{$asset}-activation"],
            ],
            [
                'id' => "delete-{$asset}-behavior",
                'title' => "Delete {$asset} behavior",
                'category' => 'delete',
                'type' => 'rules',
                'summary' => "Deletion is destructive; deactivation is the reversible alternative.",
                'keywords' => ['delete', 'destructive', 'is_active', 'false', 'preserve', 'exists'],
                'rules' => [
                    "{$asset}_id" => ['required', 'integer', "exists:{$asset}s,id"],
                ],
                'alternatives' => [
                    'preserve' => "Set is_active to false when the {$asset} and its {$codeField} code should remain available.",
                    'delete' => "Use Delete" . $title . "Tool when the stored definition must be removed.",
                ],
                'notes' => [
                    "Deleting a {$asset} does not delete pages or components; it removes only the global {$language} resource.",
                ],
                'related' => ["{$asset}-overview", "{$asset}-activation"],
            ],
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function globalAssetOrderDocuments(string $asset, string $codeField, string $language): array
    {
        $title = ucfirst($asset);
        $plural = "{$asset}s";

        return [
            [
                'id' => "order-{$asset}-overview",
                'title' => "Order {$plural} workflow",
                'category' => 'order',
                'type' => 'workflow',
                'summary' => "Persists the complete global order of {$language} resources.",
                'keywords' => ['order', 'reorder', $asset, $plural, 'sequence', 'global'],
                'workflow' => [
                    'read' => "Use Available" . $title . "sTool first to obtain every ID and its current order.",
                    'prepare' => 'Build a complete list with each existing ID and its target integer order.',
                    'submit' => "Send list to Order" . $title . "Tool.",
                    'result' => "{$title}s order updated successfully.",
                ],
                'related' => ["order-{$plural}-payload", "{$asset}-ordering"],
            ],
            [
                'id' => "order-{$plural}-payload",
                'title' => "Order {$plural} payload",
                'category' => 'order',
                'type' => 'schema',
                'summary' => "The complete list payload used to reorder {$plural}.",
                'keywords' => ['list', 'id', 'order', 'payload', 'complete', 'integer'],
                'fields' => [
                    [
                        'name' => 'list',
                        'type' => 'array',
                        'required' => true,
                        'items' => [
                            'id' => ['required', 'integer', "exists:{$asset}s,id"],
                            'order' => ['required', 'integer'],
                        ],
                    ],
                ],
                'example' => [
                    'list' => [
                        ['id' => 7, 'order' => 0],
                        ['id' => 3, 'order' => 1],
                    ],
                ],
                'notes' => [
                    'Send the complete list so hidden or omitted resources are not accidentally excluded from the intended ordering.',
                    "Ordering changes load sequence only; it does not change {$codeField} or is_active.",
                ],
                'related' => ["order-{$asset}-validation", "{$asset}-ordering"],
            ],
            [
                'id' => "order-{$asset}-validation",
                'title' => "Order {$plural} validation",
                'category' => 'validation',
                'type' => 'rules',
                'summary' => "Rules applied by Order" . $title . "Request before the transaction runs.",
                'keywords' => ['validation', 'list', 'required', 'array', 'exists', 'integer', 'transaction'],
                'rules' => [
                    'list' => ['required', 'array'],
                    'list.*.id' => ['required', 'integer', "exists:{$asset}s,id"],
                    'list.*.order' => ['required', 'integer'],
                ],
                'notes' => ['The action persists the list inside a database transaction.'],
                'related' => ["order-{$plural}-payload", "{$asset}-ordering"],
            ],
        ];
    }
}
