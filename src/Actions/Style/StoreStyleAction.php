<?php

namespace Alban\Simplisiti\Actions\Style;

use Alban\Simplisiti\Models\Style;

class StoreStyleAction
{
    public function execute(array $data): Style
    {
        $style = Style::make($data);

        $style->setNextOrder()->save();

        return $style;
    }
}
