<?php

namespace Alban\Simplisiti\Support\Plugin;

use Alban\Simplisiti\Models\Setting;

abstract class Plugin {
    public function getSettingValue(string $name): string | null
    {
        return Setting::where('plugin', $this::class)->where('name', $name)->first()->value ?? null;
    }
}
