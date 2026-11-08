<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Style\OrderStyleAction;
use Alban\Simplisiti\Requests\Style\OrderStyleRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class OrderStyleTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Reorders global CSS styles in Simplisiti.

Send the complete `list` of style IDs with their desired integer `order`. The request matches `OrderStyleRequest`, validates every style ID against the `styles` table, and persists the order in a transaction. This changes load order for active styles on every page; it does not activate, deactivate, create, or delete styles.

A successful call returns `Styles order updated successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate((new OrderStyleRequest)->rules());

        (new OrderStyleAction)->execute($validated);

        return Response::json([
            'message' => 'Styles order updated successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'list' => $schema->array()
                ->description('Required complete style order list.')
                ->items(
                    $schema->object([
                        'id' => $schema->integer()
                            ->description('Required existing style identifier.')
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
