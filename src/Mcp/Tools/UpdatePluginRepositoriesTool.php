<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Plugin\UpdateRepositoriesAction;
use Alban\Simplisiti\Requests\Plugin\UpdateRepositoriesRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class UpdatePluginRepositoriesTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Replaces the configured Simplisiti plugin repositories.

Send the complete `repositories` array; this is a replacement operation, not a partial append. Each item must contain a valid `url` according to `UpdateRepositoriesRequest`. Updating repositories changes where future catalog synchronization requests are sent, but it does not install, uninstall, enable, or disable any plugin and does not automatically synchronize the package cache.

Use `SyncPluginRepositoriesTool` after a successful update when the agent needs the package catalog from the new URLs. A successful call returns `Repositories updated successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate((new UpdateRepositoriesRequest)->rules());

        (new UpdateRepositoriesAction)->execute($validated);

        return Response::json([
            'message' => 'Repositories updated successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'repositories' => $schema->array()
                ->description('Required complete replacement list of plugin repositories.')
                ->items(
                    $schema->object([
                        'url' => $schema->string()
                            ->description('Required valid HTTP or HTTPS repository URL.')
                            ->required(),
                    ]),
                )
                ->required(),
        ];
    }
}
