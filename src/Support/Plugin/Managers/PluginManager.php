<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Support\Exceptions\PluginNotFoundException;
use Alban\Simplisiti\Models;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Exceptions\InvalidPluginException;
use Alban\Simplisiti\Support\Exceptions\PluginMd5Exception;
use Alban\Simplisiti\Support\Plugin\LifeCycle\AfterInstall;
use Alban\Simplisiti\Support\Plugin\LifeCycle\AfterLoad;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateAction;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateBody;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateDataSource;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateHeader;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateScript;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateSetting;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateStyle;
use Alban\Simplisiti\Support\Plugin\Plugin;
use Illuminate\Support\Facades\Http;

class PluginManager {
    private array $history = [];

    public function __construct(
        private SimplisitiApp $app
    ) {}

    public function add(Models\Plugin $plugin) {
        $this->history[$plugin->name] = $this->loadPlugin($plugin);
    }

    public function getRepositoryList(): array {
        return array_map(function ($plugin) {
            return (object) $plugin;
        }, $this->app->getSettingValue('repositories') ?? []);
    }

    public function updateRepositoryList(array $repositories): void {
        $this->app->setSettingValue('repositories', $repositories);
    }

    public function syncPackagesList(): array {
        $repositories = $this->getRepositoryList();

        $cacheManager = $this->app->getCacheManager();

        $packageCache = [];
        $urlLogs = [];

        $cacheManager->removeFromCache('repositories:packages');

        foreach ($repositories as $repository) {
            try {
                $response = Http::get($repository->url . '/packages');

                $packages = array_map(function ($package) use ($repository) {
                    $package['repository'] = $repository->url;
                    return $package;
                }, $response->json('packages'));

                // This is a dummy package
                // $packages[] = [
                //     'name' => 'simplisiti-tailwind',
                //     'version' => '1.0.0',
                //     'description' => 'Simplisiti Tailwind Plugin',
                //     'author' => 'Alban Xhaferllari',
                //     'email' => 'chris_alban@live.com',
                //     'website' => '',
                //     'md5' => 'd41d8cd98f00b204e9800998ecf8427e',
                //     'namespace' => 'Alban\\SimplisitiTailwind',
                //     'repository' => 'https://simplisiti.org',
                // ];

                $packageCache = [...$packageCache, ...$packages];

                $urlLogs[] = $repository->url . ' - ' . $response->status();
            }
            catch (\Exception $e)
            {
                $urlLogs[] = $e->getMessage();
                continue;
            }
        }

        $cacheManager->addToCache('repositories:packages', $packageCache);

        return $urlLogs;
    }

    public function getPackageList(): array {
        $cacheManager = $this->app->getCacheManager();

        $installedPlugins = Models\Plugin::all();
        return array_map(function ($package) use ($installedPlugins) {
            $package['status'] = $installedPlugins->where('name', $package['name'])->first() ? 'enabled' : 'not-installed';
            return (object) $package;
        }, $cacheManager->getFromCache('repositories:packages'));
    }

    public function installPackage(string $name): Models\Plugin {
        $cacheManager = $this->app->getCacheManager();

        $packageList = array_column($cacheManager->getFromCache('repositories:packages'), null, 'name');
        $package = $packageList[$name];

        // Download the package and unpack the tar file

        $response = Http::get($package['repository'] . '/' .$package['name'] .'.tar');

        $tempFile = tempnam(sys_get_temp_dir(), 'simplisiti-plugin-' . $package['name'] . '.tar');

        file_put_contents($tempFile, $response->body());

        $md5 = md5_file($tempFile);

        if ($md5 !== $package['md5']) {
            throw new PluginMd5Exception($package['name']);
        }

        $pluginPath = storage_path('plugins/' . $package['name']);

        if (!file_exists(storage_path('plugins'))) {
            mkdir(storage_path('plugins'));
        }

        if (!file_exists($pluginPath)) {
            mkdir($pluginPath);
        } else {
            $files = array_diff(scandir($pluginPath), ['.', '..']);

            foreach ($files as $file) {
                unlink($pluginPath . '/' . $file);
            }

            rmdir($pluginPath);
        }

        $tar = new \PharData($tempFile);

        $tar->extractTo($pluginPath);

        return Models\Plugin::create($package);

    }

    public function uninstallPackage(string $name): void {
        $plugin = Models\Plugin::where('name', $name)->first();

        if (!$plugin) {
            throw new PluginNotFoundException($name);
        }

        $pluginPath = storage_path('plugins/' . $plugin->name);

        $files = array_diff(scandir($pluginPath), ['.', '..']);

        foreach ($files as $file) {
            unlink($pluginPath . '/' . $file);
        }

        rmdir($pluginPath);

        $plugin->delete();
    }

    public function postInstall(Models\Plugin $installedPlugin): void {
        $plugin = $this->loadPlugin($installedPlugin);

        if ($plugin instanceof AfterInstall) {
            $plugin->runAfterInstall();
        }
    }

    public function execute(): void {
        foreach ($this->history as $plugin) {
            if ($plugin instanceof ManipulateHeader) {
                $plugin->withHeaders($this->app->getHeadManager());
            }

            if ($plugin instanceof ManipulateSetting) {
                $plugin->withSettings($this->app->getSettingManager());
            }

            if ($plugin instanceof ManipulateBody) {
                $plugin->withBody($this->app->getBodyManager());
            }

            if ($plugin instanceof ManipulateDataSource) {
                $plugin->withDataSources($this->app->getDataSourceManager());
            }

            if ($plugin instanceof ManipulateAction) {
                $plugin->withActions($this->app->getActionManager());
            }

            if ($plugin instanceof ManipulateStyle) {
                $plugin->withStyles($this->app->getStyleManager());
            }

            if ($plugin instanceof ManipulateScript) {
                $plugin->withScripts($this->app->getScriptManager());
            }
        }
    }
    
    protected function loadPlugin(Models\Plugin $plugin): Plugin {
        $namespace = $this->getNamespace($plugin);

        $pluginObject = new $namespace($this->app);

        if (!($pluginObject instanceof Plugin)) {
            throw new InvalidPluginException($plugin->name, Plugin::class);
        }

        if ($pluginObject instanceof AfterLoad) {
            $pluginObject->runAfterLoad();
        }

        return $pluginObject;
    }

    protected function getNamespace(Models\Plugin $plugin): string {
        $pluginEntry = storage_path('plugins/' . $plugin->name . '/Plugin.php');

        if (!file_exists($pluginEntry)) {
            throw new PluginNotFoundException($plugin->name);
        }

        require_once $pluginEntry;

        return $plugin->namespace . '\Plugin';
    }
}
