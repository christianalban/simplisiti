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
class InstallPluginDocsTool extends Tool
{
    use SearchableDocumentation;
    use PluginDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for installing Simplisiti plugins.

Use this before `InstallPluginTool` to understand the exact `name` payload, the `InstallPackageRequest` validation, repository download, checksum verification, extraction, metadata persistence, post-install lifecycle, and automatic activation. A successful installation leaves the plugin with status `enabled`; do not call `EnablePluginTool` again unless the plugin is later disabled. Search with terms such as `payload`, `checksum`, `not-installed`, `enabled`, or `post-install`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->pluginOperationDocuments('install'));
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
