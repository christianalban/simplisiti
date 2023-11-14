<?php

namespace Alban\Simplisiti\Actions\Resource;

use Alban\Simplisiti\Models\Resource;

class StoreResourceAction
{
    public function execute(array $data): Resource
    {
        $data['path'] = $data['file']->store('resources', config('simplisiti.resources_disk'));
        $data['mime_type'] = $data['file']->getMimeType();
        $data['extension'] = $data['file']->getClientOriginalExtension();
        $data['size'] = $data['file']->getSize();

        return Resource::create($data);
    }
}
