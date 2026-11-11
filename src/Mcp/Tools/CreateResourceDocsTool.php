<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class CreateResourceDocsTool extends Tool
{
    use SearchableDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for creating Simplisiti resources.

Use this tool before `CreateResourceTool` when an agent needs the complete creation payload, URL download behavior, filename fallback, MIME restrictions, or validation details. A resource is a static file served by Simplisiti and can be referenced by component variables and page content.

The creation MCP contract accepts only a remote HTTP or HTTPS `url`; it does not accept a file upload, local path, or base64 content. The tool downloads the response inside the MCP tool, prepares the validated upload input, and then runs the controller's existing resource action. The download is not persisted as a resource before the action.

### Searching

- Omit `query` for a compact index of creation concepts.
- Search terms such as `payload`, `URL`, `filename`, `MIME`, `name`, or `validation` return detailed matching documents.

### Response structure

Responses contain `mode`, `query`, `total`, `results`, `suggestions`, and `search`. Search results contain structured fields, examples, validation rules, behavior, and related concept IDs.
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
                'id' => 'create-resource-overview',
                'title' => 'Create resource workflow',
                'category' => 'create',
                'type' => 'workflow',
                'summary' => 'Downloads a remote file URL, validates its detected MIME type, and stores it as a new Simplisiti resource.',
                'keywords' => ['create', 'resource', 'store', 'download', 'URL', 'MIME', 'action'],
                'workflow' => [
                    'prepare' => 'Choose an HTTP or HTTPS URL for a supported file and optionally choose a unique custom name.',
                    'submit' => 'Send url and optionally name to CreateResourceTool.',
                    'download' => 'The MCP tool downloads the response before calling StoreResourceAction and does not accept local files or base64.',
                    'persist' => 'StoreResourceAction stores the uploaded content on simplisiti.resources_disk and records metadata.',
                    'result' => 'The tool returns Resource created successfully.',
                ],
                'related' => ['create-resource-payload', 'create-resource-validation', 'resource-overview'],
            ],
            [
                'id' => 'create-resource-payload',
                'title' => 'Create resource payload',
                'category' => 'create',
                'type' => 'schema',
                'summary' => 'The MCP creation payload contains an optional name and a required remote URL.',
                'keywords' => ['payload', 'name', 'url', 'required', 'file', 'remote'],
                'fields' => [
                    ['name' => 'name', 'type' => 'string|null', 'required' => false, 'max' => 255, 'unique' => true, 'description' => 'Optional custom resource name.'],
                    ['name' => 'url', 'type' => 'string', 'required' => true, 'format' => 'http or https URL', 'description' => 'Remote file to download.'],
                ],
                'example' => [
                    'name' => 'Brand logo',
                    'url' => 'https://cdn.example.com/assets/logo.png',
                ],
                'notes' => [
                    'Do not send file, file_path, local paths, or base64 content.',
                    'If name is omitted, the downloaded filename is inferred from response headers, URL path, or MIME type.',
                ],
                'related' => ['create-resource-overview', 'create-resource-validation'],
            ],
            [
                'id' => 'create-resource-validation',
                'title' => 'Create resource validation',
                'category' => 'validation',
                'type' => 'rules',
                'summary' => 'StoreResourceRequest validates the custom name and the downloaded file before StoreResourceAction runs.',
                'keywords' => ['validation', 'required', 'nullable', 'unique', 'file', 'MIME', 'mimetypes', 'url'],
                'rules' => [
                    'name' => ['nullable', 'string', 'max:255', 'unique:resources'],
                    'url' => ['required', 'url:http,https'],
                    'file' => ['required', 'file', 'mimetypes:see resource-file-rules'],
                ],
                'errors' => 'URL, download, and MIME failures are associated with url by the MCP tool. Name failures retain the name field.',
                'related' => ['create-resource-payload', 'resource-file-rules'],
            ],
            [
                'id' => 'create-resource-name-fallback',
                'title' => 'Create resource name fallback',
                'category' => 'create',
                'type' => 'behavior',
                'summary' => 'When name is omitted, the action uses the downloaded file original name.',
                'keywords' => ['name', 'filename', 'fallback', 'Content-Disposition', 'URL path', 'extension'],
                'behavior' => [
                    'priority' => [
                        '1' => 'Use Content-Disposition filename when present.',
                        '2' => 'Otherwise use the basename of the URL path.',
                        '3' => 'Otherwise use resource plus an extension inferred from the detected MIME type.',
                    ],
                    'uniqueness' => 'The resulting name still must satisfy the resources unique constraint.',
                ],
                'related' => ['create-resource-payload', 'resource-overview'],
            ],
        ];
    }

    protected function searchInstructions(): array
    {
        return [
            'query_examples' => ['payload', 'download URL', 'MIME validation', 'filename fallback', 'unique name'],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Search for url, validation, or naming behavior before calling CreateResourceTool.',
        ];
    }
}
