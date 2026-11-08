<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class ResourceDocsTool extends Tool
{
    use SearchableDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for Simplisiti resources.

A resource is a static file managed by Simplisiti and served through the configured resources disk. It may be an image, video, document, archive, spreadsheet, presentation, or another file type accepted by the resource validation rules. Component variables of type `resource` store a resource identifier, while the API and `AvailableResourcesTool` expose the public URL generated from the stored path. Page content can also use that URL when a component or template needs a static asset.

Use this shared documentation before choosing `AvailableResourcesTool`, `CreateResourceTool`, `UpdateResourceTool`, or `DeleteResourceTool`. Use the specialized `CreateResourceDocsTool`, `UpdateResourceDocsTool`, and `DeleteResourceDocsTool` for operation-specific payloads and validation.

### Searching

- Omit `query` to receive a compact index of resource concepts.
- Provide case-insensitive terms such as `resource variable`, `public URL`, `MIME`, `download`, `resource name`, or `delete side effects` to receive matching structured concepts.
- Search results include stable IDs, summaries, structured fields or behavior, related concept IDs, relevance, and matched terms.

### Response structure

The JSON response contains `mode`, `query`, `total`, `results`, `suggestions`, and `search`. Index mode returns compact concept metadata. Search mode returns the full matching documents and search metadata; it never reads or modifies resource records.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->documents());
    }

    /**
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return $this->documentationSchema($schema);
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function documents(): array
    {
        return [
            [
                'id' => 'resource-overview',
                'title' => 'Resource overview',
                'category' => 'resource',
                'type' => 'concept',
                'summary' => 'A resource is a static file stored and served by Simplisiti for use in components and pages.',
                'keywords' => ['resource', 'static', 'file', 'asset', 'component', 'page', 'served', 'MIME'],
                'definition' => 'A resource stores file metadata and a path on the configured resources disk. Simplisiti exposes a public URL for the path and can use the resource identifier in component variables of type resource.',
                'fields' => [
                    ['name' => 'id', 'type' => 'integer', 'description' => 'Stable database identifier used by resource variables and MCP operations.'],
                    ['name' => 'name', 'type' => 'string|null', 'description' => 'Optional custom display name. When omitted during creation, the downloaded filename is used.'],
                    ['name' => 'path', 'type' => 'string', 'description' => 'Stored path on the configured resources disk.'],
                    ['name' => 'url', 'type' => 'string', 'description' => 'Public URL generated from the stored path.'],
                    ['name' => 'mime_type', 'type' => 'string', 'description' => 'Detected MIME metadata stored by the resource action.'],
                    ['name' => 'extension', 'type' => 'string', 'description' => 'Original file extension stored by the resource action.'],
                    ['name' => 'size', 'type' => 'string', 'description' => 'Stored file size metadata.'],
                ],
                'related' => ['resource-variable-usage', 'resource-public-url', 'resource-file-rules'],
            ],
            [
                'id' => 'resource-variable-usage',
                'title' => 'Resource variables and pages',
                'category' => 'integration',
                'type' => 'behavior',
                'summary' => 'Component variables of type resource store an existing resource ID and resolve it to a public URL when rendered.',
                'keywords' => ['resource', 'variable', 'component', 'page', 'resource id', 'content', 'URL'],
                'behavior' => [
                    'component_definition' => 'Define a component variable with type resource; the variable represents a selected resource rather than arbitrary file bytes.',
                    'page_content' => 'A page section stores the selected resource identifier in the placement content for that component variable.',
                    'rendering' => 'The editor and runtime resolve the identifier against available resources and use the generated public URL.',
                    'selection' => 'Use AvailableResourcesTool to find IDs and URLs before creating or updating page/component content.',
                ],
                'example' => [
                    'variable' => ['type' => 'resource', 'name' => 'hero_image'],
                    'content' => ['hero_image' => 12],
                ],
                'related' => ['resource-overview', 'resource-public-url'],
            ],
            [
                'id' => 'resource-public-url',
                'title' => 'Resource path and public URL',
                'category' => 'delivery',
                'type' => 'response',
                'summary' => 'The stored path is internal disk metadata; the URL is the value intended for page content and rendered markup.',
                'keywords' => ['path', 'url', 'public', 'storage', 'served', 'resource response'],
                'structure' => [
                    'path' => 'Internal path stored on the configured resources disk.',
                    'url' => 'Public URL generated with Storage::url(path).',
                ],
                'notes' => [
                    'Do not construct a resource URL by guessing a path; use the URL returned by AvailableResourcesTool or the resource API.',
                    'Deleting or replacing a resource can invalidate content that relies on its previous URL.',
                ],
                'related' => ['resource-overview', 'resource-variable-usage', 'delete-resource-side-effects'],
            ],
            [
                'id' => 'resource-file-rules',
                'title' => 'Allowed resource file types',
                'category' => 'validation',
                'type' => 'rules',
                'summary' => 'Creation and replacement accept the MIME types defined by StoreResourceRequest and UpdateResourceRequest.',
                'keywords' => ['MIME', 'mimetypes', 'validation', 'image', 'video', 'PDF', 'ZIP', 'spreadsheet', 'document', 'presentation'],
                'allowed_mimetypes' => [
                    'image/jpeg',
                    'image/svg+xml',
                    'image/png',
                    'image/webp',
                    'video/mp4',
                    'application/pdf',
                    'image/gif',
                    'application/zip',
                    'application/x-7z-compressed',
                    'application/vnd.ms-excel',
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    'application/vnd.ms-powerpoint',
                    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                ],
                'behavior' => [
                    'detection' => 'The downloaded response is treated as a file and validated by its detected MIME type, not only by its URL extension.',
                    'unsupported' => 'An unsupported type is rejected before the resource action persists it.',
                ],
                'related' => ['resource-overview', 'create-resource-validation', 'update-resource-validation'],
            ],
            [
                'id' => 'available-resources-search',
                'title' => 'Available resources search',
                'category' => 'workflow',
                'type' => 'search',
                'summary' => 'Use AvailableResourcesTool compactly by default and pass a focused name query when the full resource URL is needed.',
                'keywords' => ['available', 'list', 'query', 'search', 'compact', 'expanded', 'resource'],
                'workflow' => [
                    'without_query' => 'Returns only id and name for every resource.',
                    'with_query' => 'Performs a case-insensitive partial name search and returns id, name, path, and public URL for matching resources.',
                    'empty_query' => 'An omitted or blank query uses compact mode.',
                    'no_match' => 'A query with no matches returns an empty array.',
                ],
                'related' => ['resource-overview', 'resource-variable-usage'],
            ],
        ];
    }

    protected function searchInstructions(): array
    {
        return [
            'query_examples' => [
                'resource variable',
                'public URL',
                'allowed MIME types',
                'download',
                'resource path',
            ],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Search for the resource field or integration behavior needed by the next tool call.',
        ];
    }
}
