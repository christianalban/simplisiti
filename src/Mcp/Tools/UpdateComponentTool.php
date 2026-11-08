<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Component\UpdateComponentAction;
use Alban\Simplisiti\Models\Component;
use Alban\Simplisiti\Requests\Component\UpdateComponentRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class UpdateComponentTool extends Tool
{
    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Updates an existing Simplisiti component using the same full-payload flow as `ComponentController::update`.

A component is a reusable content block placed inside page sections. Its variables define content that can be customized independently for each page or section where the component is used, while the component HTML remains reusable.

`styles` contains optional component-scoped CSS and `scripts` contains optional component JavaScript. When the component is rendered on a page, its CSS is wrapped under a generated CSS-safe component class and its JavaScript is emitted inline once for that component definition.

Use this destructive tool only when an existing component must be replaced with a complete updated definition. Send `component_id`, `name`, `html`, and the complete current `variables` payload; this is not a partial PATCH operation. Use `CreateComponentTool` for a new component, `ComponentDocsTool` for shared concepts, `UpdateComponentDocsTool` for update guidance, `AvailableComponentsTool` to discover identifiers, and the relevant clone or delete operation for those actions.

The input and validation rules match `UpdateComponentRequest`:

- `component_id` is required, must be an integer, and must identify an existing component.
- `name` is required, must be a string with at most 255 characters, and must be unique among other components. The current component is ignored by the uniqueness rule.
- `html` is required and must be a string containing the complete component HTML.
- `styles` and `scripts` are optional nullable strings. Include them to replace the component assets, or omit them to preserve the stored values.
- `variables` is required and must be an array. Send `variables: []` when the component has no variables. Each supplied variable requires a `type` from the `VariableType` values, plus a string `name` with at most 255 characters.
- `default` is nullable. When settings are supplied, each setting item requires `name`, `plugin`, and `value`.

Update validation accepts the same complete `VariableType` list as creation, including `month`, `week`, `link`, and `upload_file`.

For `datasource` and `resource` variables, `UpdateComponentAction` processes settings through `HandleSettings`, preserves existing `applied_settings` when no new settings are supplied, and removes the temporary `settings` field before persistence. Validation failures retain field paths such as `component_id`, `variables.0.type`, or `variables.0.settings.0.items.1.value`. A successful call persists the component through `UpdateComponentAction` and returns `Component updated successfully`.
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

        $rules = (new UpdateComponentRequest)->rules();
        $rules['name'] = [
            'required',
            'string',
            'max:255',
            Rule::unique('components')->ignore($component->getKey(), $component->getKeyName()),
        ];
        $rules['component_id'] = ['required', 'integer', 'exists:components,id'];

        $validated = $request->validate($rules);
        unset($validated['component_id']);

        (new UpdateComponentAction)->execute($component, $validated);

        return Response::json([
            'message' => 'Component updated successfully',
        ]);
    }

    /**
     * Get the tool's input schema.
     *
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        $nullableValue = fn () => $schema->union([
            'string',
            'integer',
            'number',
            'boolean',
            'array',
            'object',
            'null',
        ]);

        $requiredValue = fn () => $schema->union([
            'string',
            'integer',
            'number',
            'boolean',
            'array',
            'object',
        ])->required();

        return [
            'component_id' => $schema->integer()
                ->description('Required existing component identifier to update.')
                ->required(),
            'name' => $schema->string()
                ->max(255)
                ->description('Required unique component name; the current component name is allowed.')
                ->required(),
            'html' => $schema->string()
                ->description('Required complete HTML structure for the updated component.')
                ->required(),
            'styles' => $schema->string()
                ->nullable()
                ->description('Optional component-scoped CSS source. Include it to replace the stored CSS; omit it to preserve the current value.'),
            'scripts' => $schema->string()
                ->nullable()
                ->description('Optional component JavaScript source. Include it to replace the stored JavaScript; omit it to preserve the current value.'),
            'variables' => $schema->array()
                ->description('Required complete variable definition array for the updated component; use an empty array when it has no variables.')
                ->items(
                    $schema->object([
                        'type' => $schema->string()
                            ->enum(['text', 'number', 'tel', 'email', 'url', 'password', 'checkbox', 'radio', 'date', 'time', 'datetime-local', 'month', 'week', 'color', 'resource', 'datatable', 'textarea', 'select', 'datasource', 'action', 'page', 'link', 'upload_file'])
                            ->description('Required variable type accepted by UpdateComponentRequest.')
                            ->required(),
                        'name' => $schema->string()
                            ->max(255)
                            ->description('Required variable name; maximum 255 characters.')
                            ->required(),
                        'default' => $nullableValue()
                            ->description('Optional nullable default value.'),
                        'settings' => $schema->array()
                            ->nullable()
                            ->description('Optional settings menus processed for datasource and resource variables.')
                            ->items(
                                $schema->object([
                                    'items' => $schema->array()
                                        ->nullable()
                                        ->description('Optional settings items; supplied items require name, plugin, and value.')
                                        ->items(
                                            $schema->object([
                                                'name' => $requiredValue()
                                                    ->description('Required setting name.'),
                                                'plugin' => $requiredValue()
                                                    ->description('Required setting plugin name.'),
                                                'value' => $requiredValue()
                                                    ->description('Required setting value.'),
                                            ])
                                        ),
                                ])
                            ),
                    ])
                )
                ->required(),
        ];
    }
}
