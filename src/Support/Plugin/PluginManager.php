<?php

namespace Alban\Simplisiti\Support\Plugin;

use Alban\Simplisiti\Support\Exceptions\PluginNotFoundException;
use Alban\Simplisiti\Models;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Exceptions\ComposerJsonNotFoundException;
use Alban\Simplisiti\Support\Exceptions\InvalidPluginException;
use Alban\Simplisiti\Support\Exceptions\WrongPluginNamespaceException;

class PluginManager {
    private array $history = [];

    public function __construct(
        private SimplisitiApp $app
    ) {}

    public function add(Models\Plugin $plugin) {
        $this->history[$plugin->name] = $this->loadPlugin($plugin);
    }

    public function execute(): void {
        foreach ($this->history as $plugin) {
            if ($plugin instanceof ManipulateHeader)
            foreach ($plugin->withHeaders() as $header) {
                $this->app->addHead($header);
            }
        }
    }
    
    protected function loadPlugin(Models\Plugin $plugin): Plugin {
        $namespace = $this->getNamespace($plugin);

        $pluginObject = new $namespace($this->app);

        if (!($pluginObject instanceof Plugin)) {
            throw new InvalidPluginException($plugin->name, Plugin::class);
        }

        return $pluginObject;
    }

    protected function getNamespace(Models\Plugin $plugin): string {
        $pathComposerJson = 'vendor/' . $plugin->name . '/composer.json';

        if (!file_exists($pathComposerJson)) {
            throw new PluginNotFoundException($plugin->name);
        }

        $contentComposerJson = file_get_contents($pathComposerJson);

        if ($contentComposerJson === false) {
            throw new ComposerJsonNotFoundException($plugin->name);
        }

        $composerJson = json_decode($contentComposerJson, true);

        if (!isset($composerJson['autoload']['psr-4'])) {
            throw new WrongPluginNamespaceException($plugin->name);
        }

        return current($composerJson['autoload']['psr-4']);
    }
}
