<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Http\Resources\RepositoryResource;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class AvailablePluginRepositoriesTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Lists the repository URLs configured as sources for Simplisiti plugins.

Repositories expose the package catalog used by `AvailablePluginsTool`. This tool only reads the configured URLs; it does not contact them or synchronize their package lists. Use `SyncPluginRepositoriesTool` to refresh the cached catalog after changing repositories.

The response is an array of objects containing `url`. An empty array means no repository is currently configured.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $repositories = app(SimplisitiApp::class)
            ->getPluginManager()
            ->getRepositoryList();

        return Response::json(RepositoryResource::collection($repositories)->resolve());
    }

    public function schema(JsonSchema $schema): array
    {
        return [];
    }
}
