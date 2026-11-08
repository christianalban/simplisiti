<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Component\StoreComponentAction;
use Alban\Simplisiti\Requests\Component\StoreComponentRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;

#[IsDestructive]
class CreateComponentTool extends Tool
{
    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Creates a new reusable component in the Simplisiti CMS.

A component is a reusable content block placed inside sections of a page. Its variables define the parts of the content that can be customized independently for each page or section where the component is used, while the component HTML remains reusable.

Use this tool only when a new component must be created. Do not use it to list, update, clone, or delete an existing component.

The input and validation rules match `StoreComponentRequest` used by the component controller:

- `name` is required, must be a string with at most 255 characters, and must be unique.
- `html` is required and must be a string containing the component HTML.
- `variables` is optional and nullable, but when provided must be an array.
- Every variable requires a `type` from the allowed list and a string `name` with at most 255 characters.
- `default` and `options` are optional and nullable; their values are stored as supplied.
- `settings` must be sent as an array of menus. Each menu contains an `items` array, and each item requires `name`, `plugin`, and `value`.

Allowed variable types are: `text`, `number`, `tel`, `email`, `url`, `password`, `checkbox`, `radio`, `date`, `time`, `datetime-local`, `color`, `resource`, `datatable`, `textarea`, `datasource`, `action`, `page`, and `select`.

Validation failures are returned with the invalid field in the message, including nested paths such as `variables.0.type` or `variables.0.settings.0.items.1.value`. Fix those fields and call the tool again. A successful call persists the component through `StoreComponentAction` and returns `Component created successfully`.
MARKDOWN;

    /**
     * Handle the tool request.
     */
    public function handle(Request $request): Response
    {
        $validated = $request->validate((new StoreComponentRequest)->rules());

        $componentCreateAction = new StoreComponentAction;

        $componentCreateAction->execute($validated);

        return Response::json([
            'message' => 'Component created successfully',
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
            'name' => $schema->string()
                ->max(255)
                ->description('Required unique component name; maximum 255 characters.')
                ->required(),
            'html' => $schema->string()
                ->description('Required HTML structure for the component.')
                ->required(),
            'variables' => $schema->array()
                ->nullable()
                ->description('Optional array of dynamic variables.')
                ->items(
                    $schema->object([
                        'type' => $schema->string()
                            ->enum(['text', 'number', 'tel', 'email', 'url', 'password', 'checkbox', 'radio', 'date', 'time', 'datetime-local', 'color', 'resource', 'datatable', 'textarea', 'datasource', 'action', 'page', 'select'])
                            ->description('Required variable type.')
                            ->required(),
                        'name' => $schema->string()
                            ->max(255)
                            ->description('Required variable name; maximum 255 characters.')
                            ->required(),
                        'default' => $nullableValue()
                            ->description('Optional nullable default value.'),
                        'options' => $nullableValue()
                            ->description('Optional nullable variable options.'),
                        'settings' => $schema->array()
                            ->nullable()
                            ->description('Optional array of settings menus.')
                            ->items(
                                $schema->object([
                                    'items' => $schema->array()
                                        ->description('Settings items validated by StoreComponentRequest.')
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
                ),
        ];
    }
}
