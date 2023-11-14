<?php

namespace Alban\Simplisiti\Actions\Resource;

use Alban\Simplisiti\Models\Resource;

class DeleteResourceAction
{
    public function execute(Resource $resource): bool
    {
        $resource->deleteFile();

        return $resource->delete();
    }
}
