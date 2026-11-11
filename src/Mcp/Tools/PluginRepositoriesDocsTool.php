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
class PluginRepositoriesDocsTool extends Tool
{
    use SearchableDocumentation;
    use PluginDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for plugin repositories.

Repositories are URL sources for the plugin package catalog. Use this documentation before `AvailablePluginRepositoriesTool`, `UpdatePluginRepositoriesTool`, or `SyncPluginRepositoriesTool` to understand URLs, catalog caching, and the relationship between repositories and available plugins.

Omit `query` for the compact concept index. Search with terms such as `repository URL`, `package catalog`, or `automatic cache`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->repositoryDocuments());
    }

    public function schema(JsonSchema $schema): array
    {
        return $this->documentationSchema($schema);
    }

    protected function searchInstructions(): array
    {
        return $this->repositorySearchInstructions();
    }
}
