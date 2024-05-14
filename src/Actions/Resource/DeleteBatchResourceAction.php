<?php

namespace Alban\Simplisiti\Actions\Resource;

use Alban\Simplisiti\Models\Resource;

class DeleteBatchResourceAction
{
    public function execute(array $ids): bool
    {
        $deleteAction = new DeleteResourceAction();

        $resources = Resource::whereIn('id', $ids)->get();

        $resources->each(function ($resource) use ($deleteAction){
            $deleteAction->execute($resource);
        });

        return true;
    }
}
