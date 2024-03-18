<?php

namespace Alban\Simplisiti\Actions\Component;

use Alban\Simplisiti\Events\ComponentCreated;
use Alban\Simplisiti\Models\Component;

class StoreComponentAction
{
    public function execute(array $data): Component
    {
        $component = Component::create($data);

        ComponentCreated::dispatch($component);

        return $component;
    }
}
