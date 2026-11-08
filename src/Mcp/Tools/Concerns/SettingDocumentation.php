<?php

namespace Alban\Simplisiti\Mcp\Tools\Concerns;

trait SettingDocumentation
{
    /**
     * @return array<string, mixed>
     */
    protected function settingSearchInstructions(): array
    {
        return [
            'query_examples' => [
                'plugin settings',
                'upload_file',
                'datatable value',
                'required field',
                'options and default',
            ],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Search for a field type, metadata property, update rule, or upload workflow to receive focused settings documentation.',
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function settingDocuments(): array
    {
        return [
            [
                'id' => 'setting-overview',
                'title' => 'Plugin settings overview',
                'category' => 'settings',
                'type' => 'concept',
                'summary' => 'A plugin setting is a configuration field registered by a plugin and displayed in the Settings module.',
                'keywords' => ['settings', 'configuration', 'plugin', 'field', 'value', 'label', 'description'],
                'definition' => 'Plugins register configuration fields through Simplisiti. The Settings module groups those fields by plugin, shows the registered metadata, merges persisted values with defaults, and sends ordinary values to the settings update endpoint.',
                'structure' => [
                    'plugin' => 'Exact plugin class identifier that owns the setting.',
                    'name' => 'Stable setting key used with UpdateSettingTool.',
                    'type' => 'Control type that determines how the Settings UI edits and displays the value.',
                    'label' => 'Human-readable field title for agents and users.',
                    'description' => 'Human-readable explanation of what the field controls and what should be stored.',
                    'required' => 'UI metadata indicating whether the field is expected to be filled.',
                    'value' => 'Current value after persisted data is merged with the field definition.',
                    'default' => 'Fallback value declared by the plugin.',
                    'options' => 'Static type-specific options, including select choices or upload metadata.',
                    'data' => 'Dynamic data supplied by the plugin for the control.',
                ],
                'related' => ['setting-field-types', 'setting-discovery', 'update-setting-workflow', 'upload-setting-file-workflow'],
            ],
            [
                'id' => 'setting-discovery',
                'title' => 'Discovering settings',
                'category' => 'settings',
                'type' => 'workflow',
                'summary' => 'Use AvailableSettingsTool first, then search by plugin, name, label, type, or description before changing a value.',
                'keywords' => ['discover', 'available', 'query', 'search', 'plugin', 'name', 'metadata'],
                'workflow' => [
                    'compact' => 'Call AvailableSettingsTool without query to list plugin groups and compact field metadata.',
                    'expanded' => 'Call AvailableSettingsTool with a focused query such as a plugin class, setting name, or upload_file to receive values, defaults, options, and data.',
                    'standard' => 'Use the exact plugin and name from the expanded result with UpdateSettingTool.',
                    'upload' => 'For type upload_file, use UploadSettingFileTool and provide a remote HTTP or HTTPS URL.',
                ],
                'related' => ['setting-overview', 'update-setting-workflow', 'upload-setting-file-workflow'],
            ],
            [
                'id' => 'setting-field-types',
                'title' => 'Supported setting field types',
                'category' => 'types',
                'type' => 'schema',
                'summary' => 'Settings support HTML-like basic controls and richer Simplisiti controls.',
                'keywords' => ['types', 'text', 'number', 'checkbox', 'textarea', 'select', 'resource', 'datatable', 'datasource', 'action', 'page', 'link', 'upload_file'],
                'types' => [
                    'text' => 'Short text value.',
                    'number' => 'Numeric value.',
                    'tel' => 'Telephone-formatted text.',
                    'email' => 'Email-formatted text.',
                    'password' => 'Sensitive text input; follow the plugin description for storage expectations.',
                    'url' => 'URL-formatted text.',
                    'checkbox' => 'Boolean-like control; the UI commonly persists 1 or 0.',
                    'radio' => 'Boolean-like or option control; use the plugin description and options to determine the accepted value.',
                    'date' => 'Calendar date.',
                    'time' => 'Time value.',
                    'datetime-local' => 'Local date and time.',
                    'month' => 'Month value.',
                    'week' => 'Week value.',
                    'color' => 'Color value.',
                    'textarea' => 'Multiline text.',
                    'select' => 'One configured option from the field options.',
                    'resource' => 'A Simplisiti resource identifier selected from available static resources.',
                    'datatable' => 'Structured table value containing columns and rows.',
                    'datasource' => 'A datasource-related value resolved by the datasource control.',
                    'action' => 'An action-related value selected by the action control.',
                    'page' => 'A page-related value selected by the page control.',
                    'link' => 'Read-only download link metadata; it is not normally edited as a scalar setting.',
                    'upload_file' => 'Multipart file upload handled by the plugin endpoint; use UploadSettingFileTool.',
                ],
                'related' => ['setting-overview', 'datatable-setting-value', 'upload-file-setting-type'],
            ],
            [
                'id' => 'datatable-setting-value',
                'title' => 'Datatable setting values',
                'category' => 'types',
                'type' => 'value',
                'summary' => 'A datatable value is JSON data with columns and rows rather than a plain string.',
                'keywords' => ['datatable', 'columns', 'rows', 'json', 'value', 'settings'],
                'structure' => [
                    'columns' => 'Array of column definitions, commonly containing name and type.',
                    'rows' => 'Array of row values aligned with the column definitions.',
                ],
                'example' => [
                    'columns' => [
                        ['name' => 'url', 'type' => 'text'],
                        ['name' => 'enabled', 'type' => 'checkbox'],
                    ],
                    'rows' => [
                        ['url' => 'https://example.test', 'enabled' => 1],
                    ],
                ],
                'notes' => [
                    'Preserve the structure expected by the plugin; do not replace a datatable with a display label.',
                    'Use UpdateSettingTool because datatable values are JSON-compatible ordinary setting values.',
                ],
                'related' => ['setting-field-types', 'update-setting-workflow'],
            ],
            [
                'id' => 'upload-file-setting-type',
                'title' => 'Upload file setting type',
                'category' => 'types',
                'type' => 'special',
                'summary' => 'An upload_file setting receives a file through a plugin endpoint rather than through the normal settings value payload.',
                'keywords' => ['upload_file', 'upload', 'file', 'multipart', 'options.url', 'endpoint', 'resource'],
                'behavior' => [
                    'metadata' => 'The expanded setting definition normally exposes the plugin endpoint in options.url and may expose accepted formats in options.accept.',
                    'input' => 'UploadSettingFileTool accepts only a remote HTTP or HTTPS URL and downloads it before forwarding it as multipart field file.',
                    'stream' => 'The MCP bridge uses the same temporary stream and UploadedFile preparation used by resource tools.',
                    'persistence' => 'The plugin endpoint/action decides where the file is stored and what value it returns; no central Resource or resource_id is created by the MCP tool.',
                    'alternative' => 'Do not send upload_file through UpdateSettingTool as a string, local path, or base64 value.',
                ],
                'related' => ['upload-setting-file-workflow', 'setting-discovery', 'setting-field-types'],
            ],
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function settingOperationDocuments(string $operation): array
    {
        if ($operation === 'update') {
            return [
                [
                    'id' => 'update-setting-workflow',
                    'title' => 'Update settings workflow',
                    'category' => 'update',
                    'type' => 'workflow',
                    'summary' => 'UpdateSettingTool persists one or more ordinary plugin setting values by plugin and name.',
                    'keywords' => ['update', 'settings', 'items', 'plugin', 'name', 'value', 'null', 'action'],
                    'workflow' => [
                        'discover' => 'Use AvailableSettingsTool to obtain exact plugin and name values and read the field description.',
                        'prepare' => 'Build items with plugin, name, and value for every setting to change.',
                        'nullable' => 'Send value: null when clearing a setting; include the value key even when it is null.',
                        'submit' => 'Call UpdateSettingTool. The existing UpdateSettingAction stores each value under the plugin/name pair in one transaction.',
                        'result' => 'A successful call returns Resource updated successfully, matching SettingController.',
                    ],
                    'related' => ['setting-overview', 'update-setting-validation', 'upload-setting-file-workflow'],
                ],
                [
                    'id' => 'update-setting-validation',
                    'title' => 'Update setting validation',
                    'category' => 'validation',
                    'type' => 'rules',
                    'summary' => 'The normal settings update reuses UpdateSettingRequest and accepts nullable JSON-compatible values.',
                    'keywords' => ['validation', 'required', 'items', 'plugin', 'name', 'value', 'nullable'],
                    'rules' => [
                        'items' => ['required', 'array'],
                        'items.*.plugin' => ['required', 'string'],
                        'items.*.name' => ['required', 'string'],
                        'items.*.value' => ['nullable'],
                    ],
                    'notes' => [
                        'The MCP schema requires the value key because UpdateSettingAction reads it directly.',
                        'The request does not impose a scalar type, so arrays and objects are valid for datatable and other structured fields.',
                        'The operation updates values, not field definitions, labels, descriptions, plugin installation state, or plugin code.',
                    ],
                    'related' => ['update-setting-workflow', 'setting-field-types'],
                ],
            ];
        }

        return [
            [
                'id' => 'upload-setting-file-workflow',
                'title' => 'Upload file setting workflow',
                'category' => 'upload',
                'type' => 'workflow',
                'summary' => 'UploadSettingFileTool downloads a remote file, prepares an UploadedFile, and forwards it to the plugin upload endpoint.',
                'keywords' => ['upload', 'upload_file', 'download', 'stream', 'UploadedFile', 'multipart', 'endpoint'],
                'workflow' => [
                    'discover' => 'Use AvailableSettingsTool with upload_file to obtain the exact plugin, name, options.url, and optional accept metadata.',
                    'source' => 'Provide a remote HTTP or HTTPS URL; local paths, inline files, and base64 are not accepted.',
                    'prepare' => 'The tool downloads the content, buffers it in an anonymous temporary stream, and builds an UploadedFile with its name and MIME type.',
                    'forward' => 'The resulting file is sent as multipart field file to the plugin-local endpoint derived from the plugin identifier and options.url.',
                    'persistence' => 'The plugin endpoint/action owns storage and value updates; the MCP tool does not create a central Resource or update the settings table directly.',
                    'cleanup' => 'The temporary stream is closed after the plugin request, including failure paths.',
                ],
                'related' => ['upload-setting-file-validation', 'upload-file-setting-type', 'setting-discovery'],
            ],
            [
                'id' => 'upload-setting-file-validation',
                'title' => 'Upload setting file validation',
                'category' => 'validation',
                'type' => 'rules',
                'summary' => 'The special upload tool validates the setting identity, upload type, source URL, endpoint scope, and remote response.',
                'keywords' => ['upload', 'validation', 'plugin', 'name', 'url', 'http', 'https', 'endpoint', 'errors'],
                'rules' => [
                    'plugin' => ['required', 'string', 'registered setting owner'],
                    'name' => ['required', 'string', 'registered upload_file setting'],
                    'url' => ['required', 'url:http,https', 'non-empty successful download'],
                ],
                'errors' => [
                    'definition' => 'The plugin/name pair is rejected when it is not registered or is not type upload_file.',
                    'source' => 'Invalid schemes, failed HTTP responses, empty bodies, or download failures are reported against url.',
                    'endpoint' => 'An external upload endpoint is rejected; the endpoint must remain in the local plugin API route space.',
                    'plugin' => 'Non-successful plugin responses are surfaced instead of being converted into a success-shaped fallback.',
                ],
                'related' => ['upload-setting-file-workflow', 'upload-file-setting-type'],
            ],
        ];
    }
}
