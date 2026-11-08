<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Component\DeleteComponentAction;
use Alban\Simplisiti\Models\Component;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class DeleteComponentTool extends Tool
{
    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Permanently deletes an existing Simplisiti component.

A component is a reusable content block placed inside page sections. Deleting its definition is destructive and also removes its `component_section` relationships through the database foreign key cascade. This operation does not require a separate confirmation flag; the supplied `component_id` is the explicit request to delete that component.

Use this tool only when the component and its placements should no longer exist. Use `AvailableComponentsTool` to find the identifier, `ComponentDocsTool` for the shared component model, `CreateComponentTool` to create a new component, `UpdateComponentTool` to replace an existing definition, and the relevant clone or documentation tool for those actions. Do not use this tool to remove a component from only one section.

The MCP validates `component_id` as a required integer that must exist in the `components` table, resolves the component, and executes the same `DeleteComponentAction` used by `ComponentController::destroy`. Validation failures are returned against `component_id`. A successful call returns `Component deleted successfully`.
MARKDOWN;

    /**
     * Handle the tool request.
     */
    public function handle(Request $request): Response
    {
        $componentId = $request->validate([
            'component_id' => ['required', 'integer', 'exists:components,id'],
        ])['component_id'];

        $component = Component::find($componentId);

        if (! $component) {
            throw ValidationException::withMessages([
                'component_id' => ['The selected component is no longer available.'],
            ]);
        }

        (new DeleteComponentAction)->execute($component);

        return Response::json([
            'message' => 'Component deleted successfully',
        ]);
    }

    /**
     * Get the tool's input schema.
     *
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'component_id' => $schema->integer()
                ->description('Required existing component identifier to delete permanently.')
                ->required(),
        ];
    }
}
