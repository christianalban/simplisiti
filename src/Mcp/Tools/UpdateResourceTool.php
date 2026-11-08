<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Resource\UpdateResourceAction;
use Alban\Simplisiti\Mcp\Tools\Concerns\ResourceUrlDownloader;
use Alban\Simplisiti\Models\Resource;
use Alban\Simplisiti\Requests\Resource\UpdateResourceRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class UpdateResourceTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Updates an existing Simplisiti static resource.

Use this tool to rename a resource or replace its file. The `resource_id` must identify an existing resource. `name` is optional and may be set to null according to `UpdateResourceRequest`; `url` is optional. When `url` is supplied, the tool downloads the remote file inside the tool, buffers it in a temporary PHP stream, validates it with the same MIME rules used by `ResourceController`, and passes it to `UpdateResourceAction`. When `url` is omitted, the existing stored file is preserved and only the supplied name is updated.

The MCP input accepts only a remote HTTP or HTTPS `url` for replacement. It does not accept an uploaded file, local path, or base64 content. Download failures, invalid URLs, empty responses, and unsupported detected MIME types are reported as validation errors associated with `url`. The temporary stream is closed after the action finishes and is not persisted before the action writes the final resource.

Validation matches `UpdateResourceRequest`:
- `resource_id` is required, integer, and must exist in `resources`.
- `name` is nullable, string, maximum 255 characters, and unique while ignoring the current resource.
- `url` is optional; when present, its downloaded file must satisfy the request's file and MIME rules.

A successful call returns `Resource updated successfully`. Use `AvailableResourcesTool` to find the identifier and `UpdateResourceDocsTool` for the complete update contract.
MARKDOWN;

    public function handle(Request $request): Response
    {
        if (array_key_exists('file', $request->all())) {
            throw ValidationException::withMessages([
                'file' => ['This MCP tool accepts only url; send an HTTP or HTTPS URL instead of a file.'],
            ]);
        }

        $resourceId = $request->validate([
            'resource_id' => ['required', 'integer', 'exists:resources,id'],
        ])['resource_id'];

        $resource = Resource::find($resourceId);

        if (! $resource) {
            throw ValidationException::withMessages([
                'resource_id' => ['The selected resource is no longer available.'],
            ]);
        }

        $rules = (new UpdateResourceRequest)->rules();
        $rules['resource_id'] = ['required', 'integer', 'exists:resources,id'];
        $rules['name'] = [
            'nullable',
            'string',
            'max:255',
            Rule::unique('resources')->ignore($resource->getKey(), $resource->getKeyName()),
        ];

        $url = $request->validate([
            'url' => ['nullable', 'url:http,https'],
        ])['url'] ?? null;

        if ($url === null) {
            $validated = $request->validate($rules);
            unset($validated['resource_id']);

            (new UpdateResourceAction)->execute($resource, $validated);

            return Response::json([
                'message' => 'Resource updated successfully',
            ]);
        }

        $download = ResourceUrlDownloader::download($url);

        try {
            $validated = ResourceUrlDownloader::validate($request, $rules, $download);
            unset($validated['resource_id']);

            (new UpdateResourceAction)->execute($resource, $validated);
        } finally {
            ResourceUrlDownloader::close($download['stream']);
        }

        return Response::json([
            'message' => 'Resource updated successfully',
        ]);
    }

    /**
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'resource_id' => $schema->integer()
                ->description('Required existing resource identifier to update.')
                ->required(),
            'name' => $schema->string()
                ->max(255)
                ->nullable()
                ->description('Optional unique replacement name. Omit it to preserve the current name.'),
            'url' => $schema->string()
                ->nullable()
                ->description('Optional HTTP or HTTPS URL. When supplied, it replaces the stored file after download and MIME validation; omit it to preserve the current file.'),
        ];
    }
}
