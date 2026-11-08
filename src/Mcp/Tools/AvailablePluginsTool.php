<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Http\Resources\PackageResource;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class AvailablePluginsTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Lists plugins available to Simplisiti from the configured plugin repositories.

A plugin is an extension of Simplisiti that can add integrations, payment methods, content or page-load manipulation, routes, scripts, styles, settings, and other application behavior. The list includes packages available from the synchronized repositories and the current status for each package:

- `not-installed`: available in a repository but not installed locally.
- `enabled`: installed and enabled.
- `disabled`: installed but disabled.

If the package cache was cleared, Simplisiti automatically synchronizes the configured repositories before returning the list. Use the `name` with `InstallPluginTool`, `EnablePluginTool`, `DisablePluginTool`, or `UninstallPluginTool`.

This tool is read-only from the agent's perspective. It does not install, enable, disable, or uninstall plugins, and it does not expose plugin settings.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $packages = app(SimplisitiApp::class)
            ->getPluginManager()
            ->getPackageList();

        return Response::json(PackageResource::collection($packages)->resolve());
    }

    public function schema(JsonSchema $schema): array
    {
        return [];
    }
}
