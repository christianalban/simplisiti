<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class UpdateResourceDocsTool extends Tool
{
    use SearchableDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for updating Simplisiti resources.

Use this tool before `UpdateResourceTool` when an agent needs the resource identifier, optional rename behavior, remote file replacement behavior, or MIME validation. The operation can update the name, replace the stored file from a URL, or do both. Omitting `url` preserves the existing stored file.

The MCP contract accepts only a remote HTTP or HTTPS `url` when a replacement file is needed. It does not accept an uploaded file, local path, or base64 content. The tool downloads and validates the URL inside the tool before invoking `UpdateResourceAction`; the existing action and controller behavior remain the persistence source of truth.

### Searching

- Omit `query` for a compact index of update concepts.
- Search terms such as `resource_id`, `preserve file`, `replace URL`, `unique name`, `MIME`, or `side effects` return detailed documents.

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
                'id' => 'update-resource-overview',
                'title' => 'Update resource workflow',
                'category' => 'update',
                'type' => 'workflow',
                'summary' => 'Updates resource metadata and optionally replaces the stored file from a remote URL.',
                'keywords' => ['update', 'resource', 'edit', 'rename', 'replace', 'URL', 'preserve'],
                'workflow' => [
                    'identify' => 'Use AvailableResourcesTool to obtain resource_id.',
                    'prepare' => 'Choose a new name, a replacement URL, both, or neither when no change is needed.',
                    'submit' => 'Send resource_id and the fields to UpdateResourceTool.',
                    'replace' => 'When url is present, the MCP tool downloads and validates it before UpdateResourceAction runs.',
                    'preserve' => 'When url is omitted, the stored file remains unchanged.',
                    'result' => 'The tool returns Resource updated successfully.',
                ],
                'related' => ['update-resource-payload', 'update-resource-validation', 'resource-overview'],
            ],
            [
                'id' => 'update-resource-payload',
                'title' => 'Update resource payload',
                'category' => 'update',
                'type' => 'schema',
                'summary' => 'The update payload identifies the resource and optionally provides a new name and replacement URL.',
                'keywords' => ['payload', 'resource_id', 'name', 'url', 'optional', 'preserve'],
                'fields' => [
                    ['name' => 'resource_id', 'type' => 'integer', 'required' => true, 'exists' => 'resources.id'],
                    ['name' => 'name', 'type' => 'string|null', 'required' => false, 'max' => 255, 'unique_except_current' => true],
                    ['name' => 'url', 'type' => 'string|null', 'required' => false, 'format' => 'http or https URL', 'description' => 'Replacement file URL; omit to preserve the current file.'],
                ],
                'examples' => [
                    'rename_only' => ['resource_id' => 12, 'name' => 'Updated logo'],
                    'replace_only' => ['resource_id' => 12, 'url' => 'https://cdn.example.com/assets/logo-new.png'],
                    'rename_and_replace' => ['resource_id' => 12, 'name' => 'New logo', 'url' => 'https://cdn.example.com/assets/logo-new.png'],
                ],
                'related' => ['update-resource-overview', 'update-resource-validation'],
            ],
            [
                'id' => 'update-resource-validation',
                'title' => 'Update resource validation',
                'category' => 'validation',
                'type' => 'rules',
                'summary' => 'UpdateResourceRequest validates the identifier, optional name, and optional downloaded replacement file.',
                'keywords' => ['validation', 'resource_id', 'exists', 'unique', 'ignore', 'file', 'MIME', 'url'],
                'rules' => [
                    'resource_id' => ['required', 'integer', 'exists:resources,id'],
                    'name' => ['nullable', 'string', 'max:255', 'unique:resources ignoring current resource'],
                    'url' => ['nullable', 'url:http,https'],
                    'file' => ['sometimes', 'required', 'file', 'mimetypes:see resource-file-rules'],
                ],
                'errors' => 'Download and MIME failures are associated with url by the MCP tool. Validation errors for the resource identifier and name retain their field names.',
                'related' => ['update-resource-payload', 'resource-file-rules'],
            ],
            [
                'id' => 'update-resource-file-behavior',
                'title' => 'Update resource file behavior',
                'category' => 'update',
                'type' => 'behavior',
                'summary' => 'Supplying url replaces the old stored file; omitting it leaves the old file and metadata unchanged.',
                'keywords' => ['replace', 'preserve', 'file', 'path', 'metadata', 'delete old file', 'URL'],
                'behavior' => [
                    'url_present' => 'The action deletes the old stored file, stores the downloaded replacement, and updates path, MIME type, extension, and size.',
                    'url_omitted' => 'The action updates only fields supplied in the validated payload; the existing file metadata remains unchanged.',
                    'name' => 'A supplied name changes the resource name without changing the file.',
                ],
                'related' => ['update-resource-overview', 'resource-public-url'],
            ],
        ];
    }

    protected function searchInstructions(): array
    {
        return [
            'query_examples' => ['resource_id', 'preserve current file', 'replace URL', 'unique name', 'MIME validation'],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Search for preserve or replace to choose whether url should be included.',
        ];
    }
}
