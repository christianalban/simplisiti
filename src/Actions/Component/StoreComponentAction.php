<?php

namespace Alban\Simplisiti\Actions\Component;

use Alban\Simplisiti\Models\Component;

class StoreComponentAction
{
    public function execute(array $data): Component
    {
        return Component::create($data);
    }
}
