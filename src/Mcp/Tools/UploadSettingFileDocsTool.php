<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Alban\Simplisiti\Mcp\Tools\Concerns\SettingDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class UploadSettingFileDocsTool extends Tool
{
    use SearchableDocumentation;
    use SettingDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for the special `upload_file` plugin setting workflow.

Use this tool before `UploadSettingFileTool` to understand how to discover the setting definition, download a remote URL, prepare an UploadedFile using the same temporary stream bridge as resource tools, and forward it to the plugin-local multipart endpoint. The plugin decides how to persist the file; the MCP tool does not create a central Resource or write a resource_id into the setting.

Omit `query` for the compact operation index. Search with terms such as `download stream`, `options.url`, `multipart`, `endpoint`, or `upload validation` for focused details.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->settingOperationDocuments('upload'));
    }

    public function schema(JsonSchema $schema): array
    {
        return $this->documentationSchema($schema);
    }

    protected function searchInstructions(): array
    {
        return $this->settingSearchInstructions();
    }
}
