<?php

namespace Alban\Simplisiti\Actions\Style;

use Alban\Simplisiti\Models\Style;

class StoreStyleAction
{
    public function execute(array $data): Style
    {
        return Style::create($data);
    }
}
