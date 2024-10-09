<?php
namespace Alban\Simplisiti\Services\SimplisitiEngine\Managers;

use Alban\Simplisiti\Support\Plugin\Managers\Manager;

class ManagerContainer {
    private array $managers = [];

    public function __construct()
    {
        $managersConfig = config('simplisiti.managers');

        $this->loadFromConfig($managersConfig);
    }

    protected function loadFromConfig(?array $config): self
    {
        if (!$config) {
            return $this;
        }

        foreach ($config as $manager) {
            $this->addManager(new $manager);
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

    public function execute(string $key, string $method, ...$args)
    {
        return $this->onManager($key)->execute($method, ...$args);
    }
}
