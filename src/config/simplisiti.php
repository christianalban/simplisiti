<?php

use Alban\Simplisiti\Support\Plugin\Managers;

return [
    'styles_path' => 'sp-assets/styles',
    'scripts_path' => 'sp-assets/scripts',
    'resources_disk' => 'public',

    'managers' => [
        Managers\StyleManager::class,
        Managers\ScriptManager::class,
        Managers\ActionManager::class,
        Managers\SettingManager::class,
        Managers\RouterManager::class,

        Managers\CacheManager::class,
        Managers\DataSourceManager::class,
        Managers\PluginManager::class,
    ]
];
