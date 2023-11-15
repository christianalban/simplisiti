<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

use Alban\Simplisiti\Models\Resource;

class ResourceValue extends Value
{
    public function parse() {
        $path = Resource::find($this->default)->path;
        $url = asset('storage/' . $path);

        return $url;
    }
}
