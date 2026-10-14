<?php
namespace Alban\Simplisiti\Support\Plugin\Containers;

use Alban\Simplisiti\Models\Setting;
use Alban\Simplisiti\Support\Plugin\Managers\SettingManager;

class DataTableContainer
{
    public function __construct(
        private Setting $data,
        private SettingManager $settingManager
    ) {}

    public function getValue(): mixed
    {
        $settingEntry = $this->settingManager->getSettingEntry($this->data['plugin'], $this->data['name']);

        return $this->data->value['value'] ?? null;
    }
}
