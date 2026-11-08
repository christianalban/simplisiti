<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Plugin\DisablePackageAction;
use Alban\Simplisiti\Requests\Plugin\InstallPackageRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class DisablePluginTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Disables an installed Simplisiti plugin without uninstalling it.

Use this to stop a plugin from participating in Simplisiti's active plugin lifecycle while preserving its files, metadata, and settings. Disabling is reversible with `EnablePluginTool`; it is not the same as uninstalling.

The request follows `InstallPackageRequest`: `name` is required and must be a string. The plugin must already be installed.

A successful call returns `Packages disabled successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate((new InstallPackageRequest)->rules());

        (new DisablePackageAction)->execute($validated);

        return Response::json([
            'message' => 'Packages disabled successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'name' => $schema->string()
                ->description('Required exact installed plugin name to disable.')
                ->required(),
        ];
    }
}
