<?php

namespace Alban\Simplisiti\Actions\Style;

use Alban\Simplisiti\Models\Style;
use Alban\Simplisiti\Traits\SortUtils;
use Illuminate\Support\Facades\DB;

class OrderStyleAction
{
    use SortUtils;

    public function execute(array $data): void
    {
        DB::transaction(function () use ($data) {
            $this->forModel(Style::class)->saveOrder($data['list']);
        });
    }
}
