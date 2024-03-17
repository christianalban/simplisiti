<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateSetting;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection;

class SettingManager {
    private Collection $settings;
    private Collection $settingEntries;

    public function __construct(
    ) {
        $this->settings = new Collection;
        $this->settingEntries = new Collection;
    }

    public function settingEntry(string|ManipulateSetting $plugin, string $label, string $description = null): void
    {
        $pluginKey = $plugin instanceof ManipulateSetting ? $plugin::class : $plugin;

        $this->settingEntries[$pluginKey] = [
            'plugin' => $pluginKey,
            'label' => $label,
            'description' => $description,
        ];
    }

    public function addSetting(string|ManipulateSetting $plugin, string $name, string $type, string $label, string $description = null, bool $required = false, mixed $data = null): void
    {
        $this->settings[] = [
            'plugin' => $plugin instanceof ManipulateSetting ? $plugin::class : $plugin,
            'name' => $name,
            'type' => $type,
            'label' => $label,
            'description' => $description,
            'required' => $required,
            'data' => $data,
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

    public function getSettingMenu(Collection|EloquentCollection $settingValues): array
    {
        $settingMenu = [];

        foreach ($this->settings as $setting) {
            $setting['value'] = $settingValues->where('plugin', $setting['plugin'])->where('name', $setting['name'])->first()->value['value'] ?? null;
            if(is_callable($setting['data'])) {
                $setting['data'] = $setting['data']();
            }
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
