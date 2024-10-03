<?php

namespace Alban\Simplisiti\Actions\Component;

use Alban\Simplisiti\Events\ComponentCreated;
use Alban\Simplisiti\Models\Component;
use Alban\Simplisiti\Support\Action\HandleSettings;

class CloneComponentAction
{
    use HandleSettings;

    public function execute(Component $component): Component
    {
        $clonedComponent = $component->replicate();

        $clonedComponent->name = $component->name . '_clone';

        $clonedComponent->save();

        ComponentCreated::dispatch($clonedComponent);

        return $clonedComponent;
    }
}
