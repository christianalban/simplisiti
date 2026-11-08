<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Script\UpdateScriptAction;
use Alban\Simplisiti\Models\Script;
use Alban\Simplisiti\Requests\Script\UpdateScriptRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class UpdateScriptTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Updates an existing global JavaScript script in Simplisiti using a complete payload.

Send `script_id`, `name`, `scripts`, and `is_active`; this is not a partial PATCH operation. `scripts` is JavaScript loaded on every page when `is_active` is `true`. Setting `is_active` to `false` disables loading globally while preserving the stored script.

The input matches `UpdateScriptRequest`: `script_id` must identify an existing script, `name` is unique while ignoring the current script, `scripts` is required string code, and `is_active` is a required boolean. A successful call returns `Script updated successfully`.
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

        $rules = (new UpdateScriptRequest)->rules();
        $rules['name'] = [
            'required',
            'string',
            'max:255',
            Rule::unique('scripts')->ignore($script->getKey(), $script->getKeyName()),
        ];
        $rules['script_id'] = ['required', 'integer', 'exists:scripts,id'];

        $validated = $request->validate($rules);
        unset($validated['script_id']);

        (new UpdateScriptAction)->execute($script, $validated);

        return Response::json([
            'message' => 'Script updated successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'script_id' => $schema->integer()
                ->description('Required existing script identifier to update.')
                ->required(),
            'name' => $schema->string()
                ->max(255)
                ->description('Required unique script name; the current script name is allowed.')
                ->required(),
            'scripts' => $schema->string()
                ->description('Required complete JavaScript code. It is loaded globally only when is_active is true.')
                ->required(),
            'is_active' => $schema->boolean()
                ->description('Required activation flag. Set false to disable global loading without deleting the script.')
                ->required(),
        ];
    }
}
