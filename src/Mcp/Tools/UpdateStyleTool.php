<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Style\UpdateStyleAction;
use Alban\Simplisiti\Models\Style;
use Alban\Simplisiti\Requests\Style\UpdateStyleRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class UpdateStyleTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Updates an existing global CSS style in Simplisiti using a complete payload.

Send `style_id`, `name`, `styles`, and `is_active`; this is not a partial PATCH operation. `styles` is CSS loaded on every page when `is_active` is `true`. Setting `is_active` to `false` disables loading globally while preserving the stored style.

The input matches `UpdateStyleRequest`: `style_id` must identify an existing style, `name` is unique while ignoring the current style, `styles` is required string code, and `is_active` is a required boolean. A successful call returns `Style updated successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $styleId = $request->validate([
            'style_id' => ['required', 'integer', 'exists:styles,id'],
        ])['style_id'];

        $style = Style::find($styleId);

        if (! $style) {
            throw ValidationException::withMessages([
                'style_id' => ['The selected style is no longer available.'],
            ]);
        }

        $rules = (new UpdateStyleRequest)->rules();
        $rules['name'] = [
            'required',
            'string',
            'max:255',
            Rule::unique('styles')->ignore($style->getKey(), $style->getKeyName()),
        ];
        $rules['style_id'] = ['required', 'integer', 'exists:styles,id'];

        $validated = $request->validate($rules);
        unset($validated['style_id']);

        (new UpdateStyleAction)->execute($style, $validated);

        return Response::json([
            'message' => 'Style updated successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'style_id' => $schema->integer()
                ->description('Required existing style identifier to update.')
                ->required(),
            'name' => $schema->string()
                ->max(255)
                ->description('Required unique style name; the current style name is allowed.')
                ->required(),
            'styles' => $schema->string()
                ->description('Required complete CSS code. It is loaded globally only when is_active is true.')
                ->required(),
            'is_active' => $schema->boolean()
                ->description('Required activation flag. Set false to disable global loading without deleting the style.')
                ->required(),
        ];
    }
}
