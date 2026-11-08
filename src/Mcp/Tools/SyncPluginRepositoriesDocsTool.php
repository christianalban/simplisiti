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
class SyncPluginRepositoriesDocsTool extends Tool
{
    use SearchableDocumentation;
    use PluginDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for synchronizing plugin repositories.

Use this before `SyncPluginRepositoriesTool` to understand catalog refresh, cache replacement, repository logs, and the fact that synchronization does not alter installed plugin files or enabled/disabled states.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->repositoryOperationDocuments('sync'));
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
