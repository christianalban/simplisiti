<?php
namespace Alban\Simplisiti\Support\Plugin\Containers;

use Alban\Simplisiti\Models\Setting;
use Alban\Simplisiti\Support\Plugin\Containers\Values\Setting\DataTableContainerSetting;
use Alban\Simplisiti\Support\Plugin\Containers\Values\Setting\InputContainerSetting;
use Alban\Simplisiti\Support\Plugin\Managers\SettingManager;

class SettingContainer
{
    public function __construct(
        private Setting $data,
        private SettingManager $settingManager
    ) {}

    public function getValue(): mixed
    {
        $settingEntry = $this->settingManager->getSettingEntry($this->data['plugin'], $this->data['name']);

        $containerSetting = match ($settingEntry['type']) {
            'datatable' => new DataTableContainerSetting(),
            default => new InputContainerSetting(),
        };

        return $containerSetting->getValue($this->data);
    }
}
