<?php

namespace Alban\Simplisiti\Actions\Component;

use Alban\Simplisiti\Models\Component;

class DeleteComponentAction
{
    public function execute(Component $component): bool
    {
        return $component->delete();
    }
}
