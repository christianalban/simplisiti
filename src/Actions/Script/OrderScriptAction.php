<?php

namespace Alban\Simplisiti\Actions\Script;

use Alban\Simplisiti\Models\Script;
use Illuminate\Support\Facades\DB;

class OrderScriptAction
{
    public function execute(array $data): void
    {
        DB::transaction(function () use ($data) {
            foreach ($data['list'] as $item) {
                Script::find($item['id'])->update([
                    'order' => $item['order'],
                ]);
            }
        });
    }
}
