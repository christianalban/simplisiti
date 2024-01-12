<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

use Alban\Simplisiti\Models\Resource;

class ResourceValue extends Value
{
    public function parse() {
        $path = Resource::find($this->default)?->path;

        if (!$path) {
            return '';
        }

        $url = asset('storage/' . $path);

        return $url;
    }

    public function merge(array|string|int| null $merge) {
        return [
            'type' => $this->type,
            'name' => $this->name,
            'default' => $merge ?? $this->default,
        ];
    }
}
