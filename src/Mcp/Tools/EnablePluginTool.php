<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Plugin\EnablePackageAction;
use Alban\Simplisiti\Requests\Plugin\InstallPackageRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class EnablePluginTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Enables an installed Simplisiti plugin.

Use this when the plugin status is `disabled`. Enabling changes the stored package status to `enabled`, allowing the plugin to participate in the application lifecycle when Simplisiti loads plugins. It does not install a missing plugin and does not change its settings.

The request follows `InstallPackageRequest`: `name` is required and must be a string. The plugin must already be installed; use `InstallPluginTool` first when its status is `not-installed`.

A successful call returns `Packages enabled successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate((new InstallPackageRequest)->rules());

        (new EnablePackageAction)->execute($validated);

        return Response::json([
            'message' => 'Packages enabled successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'name' => $schema->string()
                ->description('Required exact installed plugin name to enable.')
                ->required(),
        ];
    }
}
