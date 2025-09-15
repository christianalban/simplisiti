<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

use Alban\Simplisiti\Models\Resource;
use Illuminate\Support\Facades\Storage;

class ResourceValue extends Value
{
    public function parse() {
        $path = Resource::find($this->default)?->path;

        if (!$path) {
            return '';
        }

        $url = Storage::url($path);

        return $url;
    }

    public function merge(array|string|int| null $merge) {
        return $merge ?? $this->default;
    }
}
