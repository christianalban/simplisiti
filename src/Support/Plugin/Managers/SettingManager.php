<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Setting;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateSetting;
use Illuminate\Support\Collection;

class SettingManager {
    private Collection $settings;
    private Collection $settingEntries;

    public function __construct(
    ) {
        $this->settings = new Collection;
        $this->settingEntries = new Collection;
    }

    public function settingEntry(ManipulateSetting $plugin, string $label, string $description = null): void
    {
        $this->settingEntries[$plugin::class] = [
            'plugin' => $plugin::class,
            'label' => $label,
            'description' => $description,
        ];
    }

    public function addSetting(ManipulateSetting $plugin, string $name, string $type, string $label, string $description = null, bool $required = false): void
    {
        $this->settings[] = [
            'plugin' => $plugin::class,
            'name' => $name,
            'type' => $type,
            'label' => $label,
            'description' => $description,
            'required' => $required,
        ];
    }

    public function getSettings(): Collection
    {
        return $this->settings;
    }

    public function getSettingEntries(): Collection
    {
        return $this->settingEntries;
    }

    public function getSettingMenu(): array
    {
        $settingMenu = [];

        $settingValues = Setting::all();

        foreach ($this->settings as $setting) {
            $setting['value'] = $settingValues->where('plugin', $setting['plugin'])->where('name', $setting['name'])->first()->value ?? null;
            if (array_key_exists($setting['plugin'], $settingMenu)) {
                $settingMenu[$setting['plugin']]['items'][] = $setting;
            } else {
                $settingMenu[$setting['plugin']] = [
                    'plugin' => $this->getSettingEntries()[$setting['plugin']]['plugin'],
                    'label' => $this->getSettingEntries()[$setting['plugin']]['label'],
                    'description' => $this->getSettingEntries()[$setting['plugin']]['description'],
                    'items' => [$setting],
                ];
            }
        }

        return array_values($settingMenu);
    }
}
