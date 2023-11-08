<?php

namespace Alban\Simplisiti\Actions\Style;

use Alban\Simplisiti\Models\Style;

class UpdateStyleAction
{
    public function execute(Style $style, array $data): Style
    {
        $style->update($data);

        return $style;
    }
}
