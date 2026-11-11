<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Script\DeleteScriptAction;
use Alban\Simplisiti\Models\Script;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class DeleteScriptTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Permanently deletes a global JavaScript script.

Use this destructive tool only when the script definition should no longer exist. Setting `is_active` to `false` is the non-destructive alternative when the JavaScript should remain stored but stop loading on every page.

The MCP validates `script_id` as a required integer that must exist in `scripts`, resolves the model, and executes `DeleteScriptAction`. A successful call returns `Script deleted successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $scriptId = $request->validate([
            'script_id' => ['required', 'integer', 'exists:scripts,id'],
        ])['script_id'];

        $script = Script::find($scriptId);

        if (! $script) {
            throw ValidationException::withMessages([
                'script_id' => ['The selected script is no longer available.'],
            ]);
        }

        (new DeleteScriptAction)->execute($script);

        return Response::json([
            'message' => 'Script deleted successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'script_id' => $schema->integer()
                ->description('Required existing script identifier to delete permanently.')
                ->required(),
        ];
    }
}
