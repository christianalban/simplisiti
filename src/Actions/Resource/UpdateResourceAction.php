<?php

namespace Alban\Simplisiti\Actions\Resource;

use Alban\Simplisiti\Models\Resource;

class UpdateResourceAction
{
    public function execute(Resource $resource, array $data): Resource
    {
        if (array_key_exists('file', $data)) {
            $resource->deleteFile();
            $data['path'] = $data['file']->store('resources', config('simplisiti.resources_disk'));
            $data['mime_type'] = $data['file']->getMimeType();
            $data['extension'] = $data['file']->getClientOriginalExtension();
            $data['size'] = $data['file']->getSize();
        }

        $resource->update($data);

        return $resource;
    }
}
