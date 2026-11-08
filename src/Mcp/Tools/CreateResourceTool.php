<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Actions\Resource\StoreResourceAction;
use Alban\Simplisiti\Mcp\Tools\Concerns\ResourceUrlDownloader;
use Alban\Simplisiti\Requests\Resource\StoreResourceRequest;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class CreateResourceTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Creates a static resource in the Simplisiti CMS from a remote file URL.

A resource is a static file served by Simplisiti and can be selected by component variables of type `resource` or referenced by its generated public URL in page content. Use this tool when the file does not exist in Simplisiti yet.

The MCP input intentionally accepts only `url`; it does not accept an uploaded file, a local path, or base64 content. The tool downloads the URL inside the tool, keeps the response in a temporary PHP stream, validates the resulting file with the same `StoreResourceRequest` rules used by `ResourceController`, and then passes it to `StoreResourceAction`. The temporary stream is closed after the action completes and is never stored as a resource before the action runs.

Validation matches `StoreResourceRequest`:
- `name` is nullable, must be a string with at most 255 characters, and must be unique when supplied.
- `url` is required and must be an HTTP or HTTPS URL.
- The downloaded file must be a file and its detected MIME type must be one of the controller's allowed image, video, PDF, archive, spreadsheet, document, or presentation types.

If `name` is omitted, the resource name is taken from the downloaded filename inferred from `Content-Disposition`, the URL path, or the detected MIME type. A successful call returns `Resource created successfully`.

Use `AvailableResourcesTool` to inspect existing resources, `ResourceDocsTool` for shared concepts, and `CreateResourceDocsTool` before constructing a creation payload.
MARKDOWN;

    public function handle(Request $request): Response
    {
        if (array_key_exists('file', $request->all())) {
            throw ValidationException::withMessages([
                'file' => ['This MCP tool accepts only url; send an HTTP or HTTPS URL instead of a file.'],
            ]);
        }

        $url = $request->validate([
            'url' => ['required', 'url:http,https'],
        ])['url'];
        $download = ResourceUrlDownloader::download($url);

        try {
            $validated = ResourceUrlDownloader::validate(
                $request,
                (new StoreResourceRequest)->rules(),
                $download,
            );

            (new StoreResourceAction)->execute($validated);
        } finally {
            ResourceUrlDownloader::close($download['stream']);
        }

        return Response::json([
            'message' => 'Resource created successfully',
        ]);
    }

    /**
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'name' => $schema->string()
                ->max(255)
                ->nullable()
                ->description('Optional unique resource name. When omitted, the downloaded filename is used.'),
            'url' => $schema->string()
                ->description('Required HTTP or HTTPS URL of the file to download and store as the resource.')
                ->required(),
        ];
    }
}
