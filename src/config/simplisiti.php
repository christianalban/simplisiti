<?php

use Alban\Simplisiti\Support\Plugin\Managers;

return [
    'styles_path' => 'sp-assets/styles',
    'scripts_path' => 'sp-assets/scripts',
    'resources_disk' => 'public',

    'managers' => [
        // Managers\HeadManager::class,
        Managers\StyleManager::class,
        Managers\ScriptManager::class,
        Managers\SettingManager::class,
        // Managers\BodyManager::class,
        Managers\PluginManager::class,
        Managers\CacheManager::class,
        Managers\DataSourceManager::class,
        Managers\ActionManager::class,
        Managers\ParameterManager::class,
    ]
];
