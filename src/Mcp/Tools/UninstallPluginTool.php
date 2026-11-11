<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Plugin\UninstallPackageAction;
use Alban\Simplisiti\Requests\Plugin\InstallPackageRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class UninstallPluginTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Uninstalls an installed Simplisiti plugin.

This destructive operation removes the plugin files from storage and deletes its installed metadata. It is different from disabling: disabling preserves the plugin for later re-enabling, while uninstalling removes the local installation. Use `AvailablePluginsTool` afterward to confirm that the package is listed as `not-installed`.

The request follows `InstallPackageRequest`: `name` is required and must be a string. The plugin must already be installed.

A successful call returns `Packages uninstalled successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate((new InstallPackageRequest)->rules());

        (new UninstallPackageAction)->execute($validated);

        return Response::json([
            'message' => 'Packages uninstalled successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'name' => $schema->string()
                ->description('Required exact installed plugin name to uninstall.')
                ->required(),
        ];
    }
}
