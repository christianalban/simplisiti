<?php

namespace Alban\Simplisiti\Actions\Setting;

use Alban\Simplisiti\Models\Setting;
use Illuminate\Support\Facades\DB;

class UpdateSettingAction
{
    public function execute(array $data): void
    {
        DB::transaction(function () use ($data) {
            collect($data['items'])->each(function ($item) {
                Setting::updateOrCreate(
                    [
                        'plugin' => $item['plugin'],
                        'name' => $item['name'],
                    ],
                    [
                        'value' => $item['value'],
                    ]
                );
            });
        });
    }
}
