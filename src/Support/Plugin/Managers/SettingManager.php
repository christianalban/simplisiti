<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Setting;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnBoot;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateSetting;
use Alban\Simplisiti\Support\Plugin\Plugin;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection;

class SettingManager extends Manager implements OnBoot {
    private Collection $settings;
    private Collection $settingsValues;
    private Collection $settingEntries;
    private CacheManager $cacheManager;

    public function onBoot(): void
    {
        $this->settings = new Collection;
        $this->settingEntries = new Collection;

        $this->cacheManager = $this->app->onManager(CacheManager::class);

        $this->loadSettingsValues();
    }

    protected function loadSettingsValues(): void
    {
        $this->settingsValues = $this->cacheManager->getFromCache('settings-values', Setting::all());
    }

    public function settingEntry(string|Plugin $plugin, string $label, string $description = null): void
    {
        $pluginKey = $plugin instanceof Plugin ? $plugin::class : $plugin;

        $this->settingEntries[$pluginKey] = [
            'plugin' => $pluginKey,
            'label' => $label,
            'description' => $description,
        ];
    }

    public function addSetting(string|Plugin $plugin, string $name, string $type, string $label, string $description = null, bool $required = false, mixed $data = null): void
    {
        $this->settings[] = [
            'plugin' => $plugin instanceof Plugin ? $plugin::class : $plugin,
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

    public function getSettingValue(string $settingName): string | array | null
    {
        return $this->settingsValues->where('name', $settingName)->first()->value['value'] ?? null;
    }

    public function setSettingValue(string $plugin, string $name, array $value): void
    {
        Setting::updateOrCreate(
            [
                'plugin' => $plugin,
                'name' => $name,
            ],
            [
                'value' => [
                    'value' => $value,
                ],
            ]
        );
    }
}
