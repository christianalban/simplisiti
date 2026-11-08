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
class UpdateSettingDocsTool extends Tool
{
    use SearchableDocumentation;
    use SettingDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for updating ordinary Simplisiti plugin settings.

Use the documentation to understand the `items` payload accepted by `UpdateSettingTool`, the validation inherited from `UpdateSettingRequest`, JSON-compatible values, clearing a value with `null`, and the difference between ordinary updates and the multipart `upload_file` workflow.

Omit `query` for the compact operation index. Search with terms such as `items value null`, `datatable update`, or `validation` for the relevant workflow or rules.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->settingOperationDocuments('update'));
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
