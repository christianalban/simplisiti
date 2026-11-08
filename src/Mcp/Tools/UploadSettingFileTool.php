<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\ResourceUrlDownloader;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsDestructive;

#[IsDestructive]
class UploadSettingFileTool extends Tool
{
    protected string $description = <<<'MARKDOWN'
Uploads a remote file to a plugin setting whose type is `upload_file`.

Use `AvailableSettingsTool` first and select a setting whose expanded definition has `type: upload_file`. Send the exact `plugin` identifier, exact setting `name`, and an HTTP or HTTPS `url` for the file. The tool uses the same download-and-stream bridge as the resource tools: it downloads the URL into a temporary stream, builds a valid `UploadedFile`, and sends it as multipart field `file` to the plugin endpoint configured in the setting's `options.url` metadata. If no endpoint is configured, it uses the same `/api/upload` default as the Settings UI.

This is not a scalar settings update and does not call `UpdateSettingTool` or `SettingController::update`. It does not create a central `Resource` record or store a `resource_id`; the plugin endpoint owns the upload action and decides how to persist the file and what response it produces.

The plugin route is built from the plugin class identifier using Simplisiti's plugin namespace convention and is kept inside the local `/api/spanel/{plugin}` route space. External endpoint URLs are rejected. The downloaded stream is closed after the request and is never persisted by the MCP tool.

Validation:
- `plugin` is required and must identify a registered setting.
- `name` is required and must identify a registered setting with type `upload_file`.
- `url` is required and must use HTTP or HTTPS.

Do not send a local path, multipart file, or base64 content; this MCP tool accepts only a remote URL.
MARKDOWN;

    public function handle(Request $request): Response
    {
        $validated = $request->validate([
            'plugin' => ['required', 'string'],
            'name' => ['required', 'string'],
            'url' => ['required', 'url:http,https'],
        ]);

        $settingManager = app(SimplisitiApp::class)->getSettingManager();
        $definition = $settingManager->getSettingEntry($validated['plugin'], $validated['name']);

        if ($definition === null) {
            throw ValidationException::withMessages([
                'name' => ['The selected plugin setting is not registered. Use AvailableSettingsTool to discover valid settings.'],
            ]);
        }

        if (($definition['type'] ?? null) !== 'upload_file') {
            throw ValidationException::withMessages([
                'name' => ['The selected setting is not an upload_file setting. Use UpdateSettingTool for ordinary values.'],
            ]);
        }

        $endpoint = $this->resolveEndpoint($definition['options'] ?? null);
        $download = ResourceUrlDownloader::download($validated['url']);

        try {
            $file = $download['file'];
            $path = $file->getRealPath();
            $contents = is_string($path) ? file_get_contents($path) : false;

            if ($contents === false) {
                throw ValidationException::withMessages([
                    'url' => ['The downloaded file could not be read before upload.'],
                ]);
            }

            try {
                $response = Http::connectTimeout(10)
                    ->timeout(30)
                    ->attach(
                        'file',
                        $contents,
                        $file->getClientOriginalName(),
                        ['Content-Type' => $file->getMimeType() ?: 'application/octet-stream'],
                    )
                    ->post($this->pluginEndpoint($validated['plugin'], $endpoint));
            } catch (ConnectionException $exception) {
                throw ValidationException::withMessages([
                    'url' => ['The plugin upload endpoint could not be reached: '.$exception->getMessage()],
                ]);
            }

            if (! $response->successful()) {
                $message = $response->json('message');
                $message = is_string($message) && $message !== ''
                    ? $message
                    : "The plugin upload endpoint returned HTTP status {$response->status()}.";

                throw ValidationException::withMessages([
                    'url' => [$message],
                ]);
            }
        } finally {
            ResourceUrlDownloader::close($download['stream']);
        }

        $payload = $response->json();

        return Response::json([
            'message' => 'Setting file uploaded successfully',
            'plugin' => $validated['plugin'],
            'name' => $validated['name'],
            'response' => $payload ?? $response->body(),
        ]);
    }

    public function schema(JsonSchema $schema): array
    {
        return [
            'plugin' => $schema->string()
                ->description('Required exact plugin identifier returned by AvailableSettingsTool.')
                ->required(),
            'name' => $schema->string()
                ->description('Required exact setting name whose expanded definition has type upload_file.')
                ->required(),
            'url' => $schema->string()
                ->description('Required remote HTTP or HTTPS URL. The file is downloaded before the plugin upload request.')
                ->required(),
        ];
    }

    /**
     * @param  mixed  $options
     */
    private function resolveEndpoint(mixed $options): string
    {
        $endpoint = is_array($options) ? ($options['url'] ?? '/api/upload') : '/api/upload';

        if (! is_string($endpoint) || trim($endpoint) === '') {
            return '/api/upload';
        }

        $parts = parse_url($endpoint);

        if (is_array($parts) && (isset($parts['scheme']) || isset($parts['host']))) {
            throw ValidationException::withMessages([
                'name' => ['The upload endpoint must be a local plugin route path.'],
            ]);
        }

        return '/'.ltrim($endpoint, '/');
    }

    private function pluginEndpoint(string $plugin, string $endpoint): string
    {
        $parts = array_values(array_filter(explode('\\', trim($plugin, '\\'))));
        $namespace = $parts[count($parts) - 2] ?? null;

        if (! is_string($namespace) || $namespace === '') {
            throw ValidationException::withMessages([
                'plugin' => ['The plugin identifier does not contain a valid plugin namespace.'],
            ]);
        }

        $pluginPath = Str::of($namespace)->kebab()->value();

        return url('/api/spanel/'.$pluginPath.'/'.ltrim($endpoint, '/'));
    }
}
