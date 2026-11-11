<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Plugin\InstallPackageAction;
use Alban\Simplisiti\Requests\Plugin\InstallPackageRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class InstallPluginTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Installs a plugin package from the configured Simplisiti repositories.

Use this only for a plugin whose status is `not-installed`, preferably after checking `AvailablePluginsTool`. The required `name` must exactly match a package name returned by that tool. Installation downloads and extracts the package, verifies its checksum, stores its metadata, and runs the plugin's post-install lifecycle.

Installation activates the plugin automatically: the installed record is created with status `enabled`, so do not call `EnablePluginTool` immediately after a successful installation. Use `EnablePluginTool` only when an already installed plugin was previously set to `disabled`. This tool does not modify plugin settings.

The request follows `InstallPackageRequest`: `name` is required and must be a string. A successful call returns `Packages installed successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate((new InstallPackageRequest)->rules());

        (new InstallPackageAction)->execute($validated);

        return Response::json([
            'message' => 'Packages installed successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'name' => $schema->string()
                ->description('Required exact package name returned by AvailablePluginsTool.')
                ->required(),
        ];
    }
}
