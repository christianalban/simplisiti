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
class PluginDocsTool extends Tool
{
    use SearchableDocumentation;
    use PluginDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for Simplisiti plugins.

A plugin is an extension of Simplisiti that can add integrations such as payment methods, connect external services, alter content loading, modify application behavior, register routes, provide assets, or expose other reusable capabilities. Plugins may also register settings in the Settings module; this tool explains that relationship without documenting the individual configuration fields.

Use this documentation before `AvailablePluginsTool` or the lifecycle tools when the agent needs to understand plugin states, the catalog response, or the difference between installing, enabling, disabling, and uninstalling.

Omit `query` for the compact concept index. Search with focused terms such as `plugin lifecycle`, `payment integration`, `plugin settings`, or `available response` for structured details.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->pluginDocuments());
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
