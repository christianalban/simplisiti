<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\PluginManager;

class PluginHistory {
    private array $history;

    public function __construct() {
        $this->history = [];
    }

    public function add(string $plugin, string $version) {
        $this->history[$plugin] = $version;
    }

    public function get(string $plugin): string {
        return $this->history[$plugin];
    }

    public function has(string $plugin): bool {
        return isset($this->history[$plugin]);
    }

    public function remove(string $plugin) {
        unset($this->history[$plugin]);
    }
}
