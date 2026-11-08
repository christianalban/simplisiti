<?php

namespace Alban\Simplisiti\Mcp\Tools\Concerns;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\Client\Response;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;
use Laravel\Mcp\Request;
use Symfony\Component\Mime\MimeTypes;

final class ResourceUrlDownloader
{
    /**
     * Download a resource URL into an anonymous temporary stream.
     *
     * @return array{file: UploadedFile, stream: resource}
     */
    public static function download(string $url): array
    {
        $parts = parse_url($url);

        if (! is_array($parts) || ! in_array(strtolower((string) ($parts['scheme'] ?? '')), ['http', 'https'], true)) {
            throw ValidationException::withMessages([
                'url' => ['The URL must use the http or https scheme.'],
            ]);
        }

        try {
            $response = Http::connectTimeout(10)
                ->timeout(30)
                ->get($url);
        } catch (ConnectionException $exception) {
            throw ValidationException::withMessages([
                'url' => ['The resource URL could not be downloaded: '.$exception->getMessage()],
            ]);
        }

        if (! $response->successful()) {
            throw ValidationException::withMessages([
                'url' => ["The resource URL returned HTTP status {$response->status()}."],
            ]);
        }

        $content = $response->body();

        if ($content === '') {
            throw ValidationException::withMessages([
                'url' => ['The resource URL returned an empty file.'],
            ]);
        }

        $stream = tmpfile();

        if ($stream === false) {
            throw ValidationException::withMessages([
                'url' => ['The downloaded resource could not be prepared for validation.'],
            ]);
        }

        $file = null;

        try {
            self::writeContent($stream, $content);
            $path = stream_get_meta_data($stream)['uri'] ?? null;

            if (! is_string($path) || ! is_file($path)) {
                throw ValidationException::withMessages([
                    'url' => ['The downloaded resource could not be prepared for validation.'],
                ]);
            }

            $mimeType = self::detectMimeType($path, $response);
            $originalName = self::resolveOriginalName($response, $url, $mimeType);
            $file = new UploadedFile($path, $originalName, $mimeType, UPLOAD_ERR_OK, true);

            return [
                'file' => $file,
                'stream' => $stream,
            ];
        } finally {
            if ($file === null) {
                fclose($stream);
            }
        }
    }

    /**
     * @param  resource  $stream
     */
    public static function close(mixed $stream): void
    {
        if (is_resource($stream)) {
            fclose($stream);
        }
    }

    /**
     * @param  array<string, mixed>  $rules
     * @param  array{file: UploadedFile, stream: resource}  $download
     * @return array<string, mixed>
     */
    public static function validate(Request $request, array $rules, array $download): array
    {
        try {
            return $request->merge([
                'file' => $download['file'],
            ])->validate($rules);
        } catch (ValidationException $exception) {
            $errors = $exception->errors();

            if (isset($errors['file'])) {
                $errors['url'] = $errors['file'];
                unset($errors['file']);
            }

            throw ValidationException::withMessages($errors);
        }
    }

    /**
     * @param  resource  $stream
     */
    private static function writeContent(mixed $stream, string $content): void
    {
        $length = strlen($content);
        $offset = 0;

        while ($offset < $length) {
            $written = fwrite($stream, substr($content, $offset));

            if ($written === false || $written === 0) {
                throw ValidationException::withMessages([
                    'url' => ['The downloaded resource could not be buffered.'],
                ]);
            }

            $offset += $written;
        }

        rewind($stream);
    }

    private static function detectMimeType(string $path, Response $response): ?string
    {
        $mimeType = (new \finfo(FILEINFO_MIME_TYPE))->file($path);

        if (is_string($mimeType) && $mimeType !== '') {
            return $mimeType;
        }

        $header = $response->header('Content-Type');

        if (! is_string($header) || $header === '') {
            return null;
        }

        return trim(strtolower(explode(';', $header, 2)[0]));
    }

    private static function resolveOriginalName(Response $response, string $url, ?string $mimeType): string
    {
        $name = self::nameFromContentDisposition($response->header('Content-Disposition'));

        if ($name === null) {
            $path = parse_url($url, PHP_URL_PATH);
            $name = is_string($path) ? basename(urldecode($path)) : '';
        }

        $name = trim($name);

        if ($name === '' || $name === '.' || $name === DIRECTORY_SEPARATOR) {
            $name = 'resource';
        }

        $name = preg_replace('/[^\pL\pN._ -]+/u', '-', $name) ?: 'resource';

        if (pathinfo($name, PATHINFO_EXTENSION) === '' && $mimeType !== null) {
            $extension = MimeTypes::getDefault()->getExtensions($mimeType)[0] ?? null;

            if (is_string($extension) && $extension !== '') {
                $name .= '.'.$extension;
            }
        }

        return $name;
    }

    private static function nameFromContentDisposition(?string $header): ?string
    {
        if (! is_string($header) || $header === '') {
            return null;
        }

        if (preg_match("/filename\\*=UTF-8''([^;]+)/i", $header, $matches) === 1) {
            return urldecode(trim($matches[1], "\"' "));
        }

        if (preg_match('/filename="?([^";]+)"?/i', $header, $matches) === 1) {
            return trim($matches[1]);
        }

        return null;
    }
}
