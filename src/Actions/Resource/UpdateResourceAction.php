<?php

namespace Alban\Simplisiti\Actions\Resource;

use Alban\Simplisiti\Events\ResourceUpdated;
use Alban\Simplisiti\Models\Resource;
use Illuminate\Support\Facades\Storage;

class UpdateResourceAction
{
    public function execute(Resource $resource, array $data): Resource
    {
        if (array_key_exists('file', $data)) {
            $resource->deleteFile();
            $data['path'] = Storage::disk(config('simplisiti.resources_disk'))->putFile('resources', $data['file'], 'public');
            $data['mime_type'] = $data['file']->getMimeType();
            $data['extension'] = $data['file']->getClientOriginalExtension();
            $data['size'] = $data['file']->getSize();
        }

        $resource->update($data);

        ResourceUpdated::dispatch($resource);

        return $resource;
    }
}
