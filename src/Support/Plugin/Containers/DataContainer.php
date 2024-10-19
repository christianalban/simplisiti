<?php
namespace Alban\Simplisiti\Support\Plugin\Containers;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
// use Alban\Simplisiti\Support\Plugin\Managers\ParameterManager;
use Alban\Simplisiti\Support\Plugin\Managers\SettingManager;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection;

class DataContainer
{
    private SettingManager $settingManager;
    private Collection $appliedSettings;
    // private ParameterManager $parameterManager;

    public function __construct(
        private $data
    ) {
        $app = app(SimplisitiApp::class);
        $this->settingManager = new SettingManager;
        // $this->parameterManager = $app->getParameterManager();
    }

    public function getSettingManager(): SettingManager
    {
        return $this->settingManager;
    }

    public function getSettingMenu(Collection|EloquentCollection $settingValues): array
    {
        return $this->settingManager->getSettingMenu($settingValues);
    }

    public function getData(array $settings): mixed
    {
        $this->appliedSettings = collect($settings);
        try {
            return call_user_func($this->data, $this);
        } catch (\Exception $e) {
            // TODO: Log error
            return '';
        }
    }

    public function getSettings(): Collection
    {
        return $this->settingManager->getSettings();
    }

    public function getSettingValue(string $name): mixed
    {
        return $this->appliedSettings->where('name', $name)->first()->value['value'] ?? null;
    }

    public function getParameter(string $key): mixed
    {
        // return $this->parameterManager->getParameter($key);
        return null;
    }
}
