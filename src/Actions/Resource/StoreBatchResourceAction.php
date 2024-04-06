<?php

namespace Alban\Simplisiti\Actions\Resource;

class StoreBatchResourceAction
{
    public function execute(array $data): array
    {
        $storeResourceAction = new StoreResourceAction();

        $resources = [];

        foreach ($data['file'] as $resource) {
            $resources[] = $storeResourceAction->execute([
                'file' => $resource,
            ]);
        }

        return $resources;
    }
}
