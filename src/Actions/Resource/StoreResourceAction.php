<?php

namespace Alban\Simplisiti\Actions\Resource;

use Alban\Simplisiti\Events\ResourceCreated;
use Alban\Simplisiti\Models\Resource;

class StoreResourceAction
{
    public function execute(array $data): Resource
    {
        $data['path'] = $data['file']->store('resources', config('simplisiti.resources_disk'));
        $data['mime_type'] = $data['file']->getMimeType();
        $data['extension'] = $data['file']->getClientOriginalExtension();
        $data['size'] = $data['file']->getSize();
        $data['name'] = $data['name'] ?? $data['file']->getClientOriginalName();

        $resource = Resource::create($data);

        ResourceCreated::dispatch($resource);

        return $resource;
    }
}
