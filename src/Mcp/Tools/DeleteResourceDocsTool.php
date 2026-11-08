<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class DeleteResourceDocsTool extends Tool
{
    use SearchableDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for permanently deleting Simplisiti resources.

Use this tool before `DeleteResourceTool` when an agent needs the deletion payload, validation, or side effects. Deletion removes the stored static file from the configured resources disk and deletes the database record through `DeleteResourceAction`. It can break component variables or page content that references the resource ID or URL.

Deletion is not a file replacement operation. Use `UpdateResourceTool` when the resource should remain available under a new name or with a new URL, and use `AvailableResourcesTool` to identify the resource before deleting it.

### Searching

- Omit `query` for a compact index of deletion concepts.
- Search terms such as `resource_id`, `stored file`, `side effects`, `irreversible`, or `delete versus update` return detailed documents.

### Response structure

Responses contain `mode`, `query`, `total`, `results`, `suggestions`, and `search`. Search results contain structured fields, examples, validation rules, side effects, and related concept IDs.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->documents());
    }

    public function schema(JsonSchema $schema): array
    {
        return $this->documentationSchema($schema);
    }

    protected function documents(): array
    {
        return [
            [
                'id' => 'delete-resource-overview',
                'title' => 'Delete resource overview',
                'category' => 'delete',
                'type' => 'workflow',
                'summary' => 'Permanently removes a resource record and its stored static file.',
                'keywords' => ['delete', 'resource', 'destroy', 'remove', 'permanent', 'file', 'storage'],
                'workflow' => [
                    'identify' => 'Use AvailableResourcesTool to obtain resource_id.',
                    'submit' => 'Send only resource_id to DeleteResourceTool.',
                    'execute' => 'The tool resolves the resource and executes DeleteResourceAction.',
                    'result' => 'The tool returns Resource deleted successfully.',
                ],
                'use_when' => [
                    'The file should no longer be served by Simplisiti.',
                    'All references to the resource have been removed or intentionally invalidated.',
                ],
                'do_not_use_when' => [
                    'The file should remain available but have a new name.',
                    'The file should be replaced while retaining the same resource identity.',
                ],
                'related' => ['delete-resource-payload', 'delete-resource-side-effects', 'resource-overview'],
            ],
            [
                'id' => 'delete-resource-payload',
                'title' => 'Delete resource payload',
                'category' => 'delete',
                'type' => 'schema',
                'summary' => 'The deletion tool accepts one required existing resource identifier.',
                'keywords' => ['payload', 'resource_id', 'identifier', 'required', 'minimal'],
                'fields' => [
                    ['name' => 'resource_id', 'type' => 'integer', 'required' => true, 'exists' => 'resources.id'],
                ],
                'example' => ['resource_id' => 12],
                'notes' => [
                    'There is no separate confirmation or dry_run field; supplying resource_id is the explicit destructive request.',
                    'Do not send url or file fields to the deletion tool.',
                ],
                'related' => ['delete-resource-overview', 'delete-resource-validation'],
            ],
            [
                'id' => 'delete-resource-validation',
                'title' => 'Delete resource validation',
                'category' => 'validation',
                'type' => 'rules',
                'summary' => 'The tool validates resource_id before resolving and deleting the model.',
                'keywords' => ['validation', 'required', 'integer', 'exists', 'resources', 'error'],
                'rules' => [
                    'resource_id' => ['required', 'integer', 'exists:resources,id'],
                ],
                'behavior' => [
                    'missing' => 'A missing resource_id is rejected.',
                    'invalid_type' => 'A non-integer resource_id is rejected.',
                    'unknown' => 'An identifier that does not exist in resources is rejected.',
                    'race' => 'If the resource disappears after validation, the tool returns a resource_id validation error instead of deleting an unknown model.',
                ],
                'related' => ['delete-resource-payload', 'delete-resource-overview'],
            ],
            [
                'id' => 'delete-resource-side-effects',
                'title' => 'Delete resource side effects',
                'category' => 'delete',
                'type' => 'behavior',
                'summary' => 'Deletion removes both the stored file and the database metadata.',
                'keywords' => ['side effects', 'storage', 'path', 'file', 'database', 'URL', 'component', 'page'],
                'action' => 'DeleteResourceAction calls Resource::deleteFile() and then deletes the resource model.',
                'effects' => [
                    'stored_file' => 'The file at the resource path is deleted from simplisiti.resources_disk.',
                    'database' => 'The resource row is deleted.',
                    'references' => 'Component/page content that stores the resource ID or previous URL is not rewritten.',
                ],
                'notes' => [
                    'The operation is irreversible unless an independent backup exists.',
                    'Search page and component content before deleting a resource that may still be referenced.',
                ],
                'related' => ['delete-resource-overview', 'resource-variable-usage'],
            ],
        ];
    }

    protected function searchInstructions(): array
    {
        return [
            'query_examples' => ['resource_id', 'stored file', 'side effects', 'irreversible', 'delete versus update'],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Search side effects before deleting a resource referenced by a page or component.',
        ];
    }
}
