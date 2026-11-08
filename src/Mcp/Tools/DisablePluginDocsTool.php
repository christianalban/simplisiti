<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\PluginDocumentation;
use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class DisablePluginDocsTool extends Tool
{
    use SearchableDocumentation;
    use PluginDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for disabling installed Simplisiti plugins.

Use this before `DisablePluginTool` to understand the reversible status change, the exact `name` payload, and the difference between disabling and uninstalling. Search with `disabled`, `preserve`, `reversible`, or `uninstall`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->pluginOperationDocuments('disable'));
    }

    public function schema(JsonSchema $schema): array
    {
        return $this->documentationSchema($schema);
    }

    protected function searchInstructions(): array
    {
        return $this->pluginSearchInstructions();
    }
}
