<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Resource\DeleteResourceAction;
use Alban\Simplisiti\Models\Resource;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class DeleteResourceTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Permanently deletes an existing Simplisiti static resource.

Use this tool only when the resource file and its database definition should be removed. The operation resolves `resource_id` and executes the same `DeleteResourceAction` used by `ResourceController::destroy`; it deletes the stored file from the configured resources disk and then deletes the database record.

Deleting a resource can break component variables or page content that reference its identifier or URL. Use `AvailableResourcesTool` to verify the identifier first, `UpdateResourceTool` to rename or replace it, and `DeleteResourceDocsTool` for deletion side effects and validation details.

The MCP validates `resource_id` as a required integer that must exist in `resources`. There is no separate confirmation flag: providing the identifier is the explicit destructive request. A successful call returns `Resource deleted successfully`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $resourceId = $request->validate([
            'resource_id' => ['required', 'integer', 'exists:resources,id'],
        ])['resource_id'];

        $resource = Resource::find($resourceId);

        if (! $resource) {
            throw ValidationException::withMessages([
                'resource_id' => ['The selected resource is no longer available.'],
            ]);
        }

        (new DeleteResourceAction)->execute($resource);

        return Response::json([
            'message' => 'Resource deleted successfully',
        ]);
    }

    /**
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'resource_id' => $schema->integer()
                ->description('Required existing resource identifier to delete permanently.')
                ->required(),
        ];
    }
}
