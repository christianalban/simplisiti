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
class UpdatePluginRepositoriesDocsTool extends Tool
{
    use SearchableDocumentation;
    use PluginDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for replacing the configured plugin repositories.

Use this before `UpdatePluginRepositoriesTool` to understand that `repositories` is a complete replacement array, each item requires a valid URL, and the package catalog should be refreshed afterward with `SyncPluginRepositoriesTool`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->repositoryOperationDocuments('update'));
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
