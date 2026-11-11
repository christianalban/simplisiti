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
class SettingDocsTool extends Tool
{
    use SearchableDocumentation;
    use SettingDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for Simplisiti plugin settings.

A plugin setting is a configuration field registered by a plugin. Settings are grouped by plugin and expose metadata such as `name`, `type`, `label`, `description`, `required`, `default`, `options`, `data`, and the current `value`.

Use this documentation before `AvailableSettingsTool` or the settings update tools when the agent needs to understand field types, structured values, the meaning of labels and descriptions, or why `upload_file` requires a separate multipart workflow.

Omit `query` for a compact concept index. Search with focused terms such as `datatable`, `upload_file`, `required field`, `options`, or `settings value` for structured details.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->settingDocuments());
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
