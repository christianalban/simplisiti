<?php

namespace Alban\Simplisiti\Support\Plugin\Manipulate;

use Alban\Simplisiti\Support\Plugin\Managers\SettingManager;

interface ManipulateSetting {
    public function withSettings(SettingManager $settingManager): void;
}
