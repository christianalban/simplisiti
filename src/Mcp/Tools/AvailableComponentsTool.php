<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Http\Resources\ComponentResource;
use Alban\Simplisiti\Models\Component;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class AvailableComponentsTool extends Tool
{
    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Returns the complete list of all available components in the Simplisiti CMS.

This resource returns all existing records in JSON format. It does not support pagination, search parameters, or filters.

### Response Structure (JSON)

The response contains an array of objects. Each object represents a component and includes:
- **id** (integer): Unique identifier.
- **name** (string): Component name.
- **html** (string): HTML structure of the component.
- **variables** (array): Array of configured dynamic fields, detailing attributes such as `type`, `name`, `default`, `options`, `applied_settings`, and `value`.
MARKDOWN;

    /**
     * Handle the tool request.
     */
    public function handle(Request $request): Response
    {
        $components = Component::get();

        $componentResource = ComponentResource::collection($components);

        return Response::json($componentResource->resolve());
    }
}
