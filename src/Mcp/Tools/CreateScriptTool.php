<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Script\StoreScriptAction;
use Alban\Simplisiti\Requests\Script\StoreScriptRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class CreateScriptTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Creates a global JavaScript script in Simplisiti.

The `scripts` field contains JavaScript code that becomes available to every page. `is_active` controls global loading: when it is `true`, the script is loaded on all pages; when it is `false`, the script remains stored but is not loaded anywhere.

Use this tool only for a new script. The input matches `StoreScriptRequest`: `name` is required, unique, and limited to 255 characters; `scripts` is required JavaScript as a string; and `is_active` is a required boolean. The action assigns the next order automatically.

A successful call returns `Script created successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate((new StoreScriptRequest)->rules());

        (new StoreScriptAction)->execute($validated);

        return Response::json([
            'message' => 'Script created successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'name' => $schema->string()
                ->max(255)
                ->description('Required unique global script name; maximum 255 characters.')
                ->required(),
            'scripts' => $schema->string()
                ->description('Required JavaScript code loaded globally when is_active is true.')
                ->required(),
            'is_active' => $schema->boolean()
                ->description('Required activation flag. Set false to keep the script stored but disable loading on every page.')
                ->required(),
        ];
    }
}
