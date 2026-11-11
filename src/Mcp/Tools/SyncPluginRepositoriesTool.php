<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Plugin\SyncRepositoriesAction;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;

class SyncPluginRepositoriesTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Synchronizes the plugin catalog from all configured repositories.

The tool requests each configured repository's package catalog, refreshes the `repositories:packages` cache, and returns one log entry per repository or synchronization error. It does not install, uninstall, enable, or disable plugins.

Use this after `UpdatePluginRepositoriesTool`, or when `AvailablePluginsTool` has no cached catalog. The package list endpoint also triggers this synchronization automatically when the package cache is missing.

A successful call returns `Repositories synced successfully` together with the synchronization logs.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $logs = (new SyncRepositoriesAction)->execute();

        return Response::json([
            'data' => $logs,
            'message' => 'Repositories synced successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [];
    }
}
