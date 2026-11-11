<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Style\StoreStyleAction;
use Alban\Simplisiti\Requests\Style\StoreStyleRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class CreateStyleTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Creates a global CSS style in Simplisiti.

The `styles` field contains CSS code that becomes available to every page. `is_active` controls global loading: when it is `true`, the style is loaded on all pages; when it is `false`, the style remains stored but is not loaded anywhere.

Use this tool only for a new style. The input matches `StoreStyleRequest`: `name` is required, unique, and limited to 255 characters; `styles` is required CSS as a string; and `is_active` is a required boolean. The action assigns the next order automatically.

A successful call returns `Style created successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate((new StoreStyleRequest)->rules());

        (new StoreStyleAction)->execute($validated);

        return Response::json([
            'message' => 'Style created successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'name' => $schema->string()
                ->max(255)
                ->description('Required unique global style name; maximum 255 characters.')
                ->required(),
            'styles' => $schema->string()
                ->description('Required CSS code loaded globally when is_active is true.')
                ->required(),
            'is_active' => $schema->boolean()
                ->description('Required activation flag. Set false to keep the style stored but disable loading on every page.')
                ->required(),
        ];
    }
}
