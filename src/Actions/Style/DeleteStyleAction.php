<?php

namespace Alban\Simplisiti\Actions\Style;

use Alban\Simplisiti\Models\Style;

class DeleteStyleAction
{
    public function execute(Style $style): bool
    {
        return $style->delete();
    }
}
