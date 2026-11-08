<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Script\OrderScriptAction;
use Alban\Simplisiti\Requests\Script\OrderScriptRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class OrderScriptTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Reorders global JavaScript scripts in Simplisiti.

Send the complete `list` of script IDs with their desired integer `order`. The request matches `OrderScriptRequest`, validates every script ID against the `scripts` table, and persists the order in a transaction. This changes load order for active scripts on every page; it does not activate, deactivate, create, or delete scripts.

A successful call returns `Scripts order updated successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate((new OrderScriptRequest)->rules());

        (new OrderScriptAction)->execute($validated);

        return Response::json([
            'message' => 'Scripts order updated successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'list' => $schema->array()
                ->description('Required complete script order list.')
                ->items(
                    $schema->object([
                        'id' => $schema->integer()
                            ->description('Required existing script identifier.')
                            ->required(),
                        'order' => $schema->integer()
                            ->description('Required target order.')
                            ->required(),
                    ]),
                )
                ->required(),
        ];
    }
}
