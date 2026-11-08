<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Style\DeleteStyleAction;
use Alban\Simplisiti\Models\Style;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class DeleteStyleTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Permanently deletes a global CSS style.

Use this destructive tool only when the style definition should no longer exist. Setting `is_active` to `false` is the non-destructive alternative when the CSS should remain stored but stop loading on every page.

The MCP validates `style_id` as a required integer that must exist in `styles`, resolves the model, and executes `DeleteStyleAction`. A successful call returns `Style deleted successfully`.
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

        (new DeleteStyleAction)->execute($style);

        return Response::json([
            'message' => 'Style deleted successfully',
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'style_id' => $schema->integer()
                ->description('Required existing style identifier to delete permanently.')
                ->required(),
        ];
    }
}
