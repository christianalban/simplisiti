<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Services\SimplisitiEngine\Settings\Settings;
use Alban\Simplisiti\Support\Plugin\Containers\DataContainer;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateSetting;
use Closure;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection;

class SettingManager {
    private Collection $settings;
    private Collection $settingEntries;
    private Collection $useSettingContainer;

    public function __construct(
    ) {
        $this->settings = new Collection;
        $this->settingEntries = new Collection;
        $this->useSettingContainer = new Collection;
    }

    private function getPluginKey(string|ManipulateSetting $plugin): string
    {
        return $plugin instanceof ManipulateSetting ? $plugin::class : $plugin;
    }

    public function settingEntry(string|ManipulateSetting $plugin, string $label, ?string $description = null): void
    {
        $pluginKey = $this->getPluginKey($plugin);

        $this->settingEntries[$pluginKey] = [
            'plugin' => $pluginKey,
            'label' => $label,
            'description' => $description,
        ];
    }

    public function addSetting(string|ManipulateSetting $plugin, string $name, string $type, string $label, ?string $description = null, bool $required = false, mixed $data = null, ?array $options = [], mixed $default = null, ?Closure $manipulateSettings = null): void
    {
        $this->settings[] = [
            'plugin' => $plugin instanceof ManipulateSetting ? $plugin::class : $plugin,
            'name' => $name,
            'type' => $type,
            'label' => $label,
            'description' => $description,
            'required' => $required,
            'data' => $data,
            'default' => $default,
            'options' => $options,
            'manipulateSettings' => $manipulateSettings,
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

    public function getSettingMenu(Collection|EloquentCollection $settingValues, ?DataContainer $dataContainer = null): array
    {
        $settingMenu = [];

        foreach ($this->settings as $setting) {
            $settingValue = $settingValues->where('plugin', $setting['plugin'])->where('name', $setting['name'])->first()->value['value'] ?? null;
            if (is_callable($setting['manipulateSettings'])) {
                $settingValue = $setting['manipulateSettings']($settingValue, $dataContainer);
            }
            $setting['value'] = Settings::mergeSettings($setting, $settingValue, $setting['options'] ?? null);
            if(is_callable($setting['data'])) {
                $setting['data'] = $setting['data']($dataContainer);
            }
            if (array_key_exists($setting['plugin'], $settingMenu)) {
                $settingMenu[$setting['plugin']]['items'][] = $setting;
            } else {
                $settingMenu[$setting['plugin']] = [
                    'plugin' => null,
                    'label' => null,
                    'description' => null,
                    'items' => [$setting],
                ];

                if (isset($this->getSettingEntries()[$setting['plugin']])) {
                    $settingMenu[$setting['plugin']]['plugin'] = $this->getSettingEntries()[$setting['plugin']]['plugin'];
                    $settingMenu[$setting['plugin']]['label'] = $this->getSettingEntries()[$setting['plugin']]['label'];
                    $settingMenu[$setting['plugin']]['description'] = $this->getSettingEntries()[$setting['plugin']]['description'];
                }
            }
        }

        return array_values($settingMenu);
    }

    public function useSettingContainer(string|ManipulateSetting $plugin, bool $use = true): void
    {
        $this->useSettingContainer->put($this->getPluginKey($plugin), $use);
    }

    public function shouldUseSettingContainer(string|ManipulateSetting $plugin): bool
    {
        return $this->useSettingContainer->get($this->getPluginKey($plugin), false);
    }

    public function getSettingEntry(string $plugin, string $name): ?array
    {
        return $this->settings->where('plugin', $plugin)->where('name', $name)->first();
    }

    public function saveSettingEntry(string $plugin, string $name): ?array
    {
        return $this->settings->where('plugin', $plugin)->where('name', $name)->first();
    }
}
