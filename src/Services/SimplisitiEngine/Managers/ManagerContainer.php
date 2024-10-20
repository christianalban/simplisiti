<?php
namespace Alban\Simplisiti\Services\SimplisitiEngine\Managers;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnBeforeInit;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnBoot;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnInit;
use Alban\Simplisiti\Support\Plugin\Managers\Manager;

class ManagerContainer {
    private array $managers = [];

    public function __construct(
        private SimplisitiApp $app,
    ) {}

    public function load() {
        $managersConfig = config('simplisiti.managers');

        $this->loadFromConfig($managersConfig);
    }

    protected function loadFromConfig(?array $config): self
    {
        if (!$config) {
            return $this;
        }

        foreach ($config as $manager) {
            $manager = new $manager($this->app);

            if ($manager instanceof OnBeforeInit) {
                $manager->onBeforeInit();
            }

            $this->addManager($manager);

            if ($manager instanceof OnInit) {
                $manager->onInit();
            }
        }

        return $this;
    }

    protected function addManager(Manager $manager): self
    {
        $this->managers[$manager::class] = $manager;
        return $this;
    }

    public function onManager(string $key): Manager
    {
        return $this->managers[$key];
    }

    public function boot(): void
    {
        foreach ($this->managers as $manager) {
            if ($manager instanceof OnBoot) {
                $manager->onBoot();
            }
        }
    }
}
