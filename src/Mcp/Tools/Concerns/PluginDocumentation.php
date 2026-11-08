<?php

namespace Alban\Simplisiti\Mcp\Tools\Concerns;

trait PluginDocumentation
{
    /**
     * @return array<string, mixed>
     */
    protected function pluginSearchInstructions(): array
    {
        return [
            'query_examples' => [
                'plugin lifecycle',
                'not-installed enabled disabled',
                'plugin settings',
                'checksum installation',
                'repository synchronization',
            ],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Search for a lifecycle state, operation, validation rule, or repository concept to receive focused plugin documentation.',
        ];
    }

    /**
     * @return array<string, mixed>
     */
    protected function repositorySearchInstructions(): array
    {
        return [
            'query_examples' => [
                'repository URL',
                'replace repositories',
                'sync package catalog',
                'automatic package cache',
            ],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Search for repository configuration or catalog synchronization when managing the plugin package source list.',
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function pluginDocuments(): array
    {
        return [
            [
                'id' => 'plugin-overview',
                'title' => 'Plugin overview',
                'category' => 'plugin',
                'type' => 'concept',
                'summary' => 'A plugin extends Simplisiti with integrations, lifecycle behavior, or additional application capabilities.',
                'keywords' => ['plugin', 'extension', 'integration', 'payment', 'content', 'behavior', 'simplisiti'],
                'definition' => 'A plugin is an installable extension of Simplisiti. Developers can use plugins to add payment methods, connect external services, alter content loading, modify application behavior, register routes, add styles or scripts, and provide other reusable functionality.',
                'fields' => [
                    ['name' => 'name', 'type' => 'string', 'description' => 'Exact package name used by lifecycle tools.'],
                    ['name' => 'version', 'type' => 'string', 'description' => 'Published plugin version.'],
                    ['name' => 'description', 'type' => 'string', 'description' => 'Package description from the repository catalog.'],
                    ['name' => 'author', 'type' => 'string', 'description' => 'Plugin author from package metadata.'],
                    ['name' => 'status', 'type' => 'string', 'description' => 'Current local state: not-installed, enabled, or disabled.'],
                ],
                'related' => ['plugin-capabilities', 'plugin-lifecycle', 'plugin-settings'],
            ],
            [
                'id' => 'plugin-capabilities',
                'title' => 'Plugin capabilities',
                'category' => 'plugin',
                'type' => 'behavior',
                'summary' => 'Plugins can participate in multiple Simplisiti extension points.',
                'keywords' => ['payment', 'connection', 'content', 'load', 'route', 'style', 'script', 'action', 'datasource'],
                'capabilities' => [
                    'integrations' => 'Connect payment providers, external services, or other application APIs.',
                    'content' => 'Alter or enrich how page content and data are loaded.',
                    'behavior' => 'Modify Simplisiti lifecycle behavior and register application actions.',
                    'assets' => 'Provide styles or scripts that are loaded by the application.',
                    'routing' => 'Register plugin routes and related endpoints.',
                ],
                'related' => ['plugin-overview', 'plugin-lifecycle'],
            ],
            [
                'id' => 'plugin-lifecycle',
                'title' => 'Plugin lifecycle states',
                'category' => 'plugin',
                'type' => 'workflow',
                'summary' => 'Installation activates a plugin automatically; enabling is used to reactivate an installed plugin that was disabled.',
                'keywords' => ['not-installed', 'installed', 'enabled', 'disabled', 'install', 'enable', 'disable', 'uninstall'],
                'states' => [
                    'not-installed' => 'The package is available in a configured repository but has no local installation.',
                    'enabled' => 'The package is installed and marked to participate in the active plugin lifecycle.',
                    'disabled' => 'The package remains installed but is marked inactive until enabled again.',
                ],
                'transitions' => [
                    'install' => 'not-installed -> enabled; the package is installed, activated by default, and its post-install lifecycle runs.',
                    'enable' => 'disabled -> enabled.',
                    'disable' => 'enabled -> disabled without removing files.',
                    'uninstall' => 'installed state -> not-installed by removing local files and metadata.',
                ],
                'related' => ['install-plugin-workflow', 'enable-plugin-workflow', 'disable-plugin-workflow', 'uninstall-plugin-workflow'],
            ],
            [
                'id' => 'plugin-settings',
                'title' => 'Plugin settings',
                'category' => 'settings',
                'type' => 'concept',
                'summary' => 'Some plugins expose configurable values in the Simplisiti Settings module.',
                'keywords' => ['settings', 'configuration', 'options', 'plugin'],
                'behavior' => [
                    'availability' => 'A plugin may register settings that appear after the plugin is installed and loaded.',
                    'scope' => 'Settings are edited through the Settings module, not through the plugin lifecycle tools.',
                    'documentation' => 'This plugin documentation intentionally explains only the relationship with Settings; use SettingDocsTool, AvailableSettingsTool, UpdateSettingTool, and UploadSettingFileTool for detailed configuration discovery and updates.',
                ],
                'related' => ['plugin-overview', 'plugin-lifecycle'],
            ],
            [
                'id' => 'available-plugins-response',
                'title' => 'Available plugins response',
                'category' => 'available',
                'type' => 'schema',
                'summary' => 'The available plugin list contains repository metadata and the local installation status.',
                'keywords' => ['available', 'list', 'package', 'catalog', 'status', 'cache', 'response'],
                'structure' => [
                    'name' => 'Exact package name used by lifecycle tools.',
                    'version' => 'Published package version.',
                    'description' => 'Package description.',
                    'author' => 'Package author.',
                    'status' => 'not-installed, enabled, or disabled.',
                ],
                'workflow' => [
                    'cache' => 'If the package cache is missing, the list operation synchronizes configured repositories automatically before returning.',
                    'empty' => 'If synchronization returns no packages, the response is an empty array.',
                ],
                'related' => ['plugin-lifecycle', 'plugin-repositories-overview'],
            ],
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function pluginOperationDocuments(string $operation): array
    {
        $title = ucfirst($operation);
        $tool = "{$title}PluginTool";
        $action = "{$title}PackageAction";

        $documents = [
            [
                'id' => "{$operation}-plugin-workflow",
                'title' => "{$title} plugin workflow",
                'category' => $operation,
                'type' => 'workflow',
                'summary' => "{$title} changes a plugin's local lifecycle state through {$tool}.",
                'keywords' => [$operation, 'plugin', 'name', 'workflow', 'lifecycle'],
                'workflow' => [
                    'identify' => 'Use AvailablePluginsTool to obtain the exact package name and current status.',
                    'submit' => "Send the required name to {$tool}.",
                    'action' => "{$action} executes the controller-equivalent lifecycle operation.",
                    'result' => "The tool returns the controller-compatible success message for {$operation}.",
                ],
                'related' => ['plugin-overview', 'plugin-lifecycle', "{$operation}-plugin-validation"],
            ],
            [
                'id' => "{$operation}-plugin-validation",
                'title' => "{$title} plugin validation",
                'category' => 'validation',
                'type' => 'rules',
                'summary' => "The {$title} plugin tool reuses InstallPackageRequest.",
                'keywords' => [$operation, 'validation', 'required', 'string', 'name'],
                'rules' => [
                    'name' => ['required', 'string'],
                ],
                'notes' => [
                    'The name must exactly identify the package expected by the plugin manager.',
                    "The operation may fail when the plugin is not in the required lifecycle state; read the current status before calling {$tool}.",
                ],
                'related' => ["{$operation}-plugin-workflow", 'available-plugins-response'],
            ],
        ];

        if ($operation === 'install') {
            $documents[0]['workflow']['activation'] = 'Installation creates the plugin record with status enabled automatically; do not call EnablePluginTool after a successful installation.';
            $documents[0]['notes'] = [
                'EnablePluginTool is only needed when an installed plugin is later disabled.',
            ];
            $documents[] = [
                'id' => 'install-plugin-effects',
                'title' => 'Install plugin effects',
                'category' => 'install',
                'type' => 'behavior',
                'summary' => 'Installation downloads, verifies, extracts, stores, activates, and post-processes a plugin package.',
                'keywords' => ['install', 'download', 'extract', 'md5', 'checksum', 'post-install', 'files', 'enabled', 'activation'],
                'effects' => [
                    'download' => 'Downloads the package archive from its repository.',
                    'integrity' => 'Verifies the downloaded archive against the published MD5 value.',
                    'storage' => 'Extracts the plugin into Simplisiti plugin storage and saves package metadata.',
                    'activation' => 'The plugin record uses the enabled default, so the plugin is activated automatically after installation.',
                    'lifecycle' => 'Runs the plugin post-install lifecycle after persistence.',
                ],
                'related' => ['install-plugin-workflow', 'plugin-lifecycle'],
            ];
        }

        if ($operation === 'enable') {
            $documents[] = [
                'id' => 'enable-plugin-effects',
                'title' => 'Enable plugin effects',
                'category' => 'enable',
                'type' => 'behavior',
                'summary' => 'Enabling changes only the installed plugin status to enabled.',
                'keywords' => ['enable', 'enabled', 'status', 'installed', 'settings'],
                'effects' => [
                    'status' => 'The stored plugin status becomes enabled.',
                    'preservation' => 'Plugin files, metadata, and settings remain in place.',
                    'alternative' => 'Use InstallPluginTool first when the package is not installed.',
                ],
                'related' => ['enable-plugin-workflow', 'disable-plugin-effects'],
            ];
        }

        if ($operation === 'disable') {
            $documents[] = [
                'id' => 'disable-plugin-effects',
                'title' => 'Disable plugin effects',
                'category' => 'disable',
                'type' => 'behavior',
                'summary' => 'Disabling preserves the installed plugin while changing its status to disabled.',
                'keywords' => ['disable', 'disabled', 'status', 'preserve', 'reversible'],
                'effects' => [
                    'status' => 'The stored plugin status becomes disabled.',
                    'preservation' => 'Plugin files, metadata, and settings are not deleted.',
                    'reversal' => 'Use EnablePluginTool to make the plugin active again.',
                ],
                'related' => ['disable-plugin-workflow', 'enable-plugin-effects', 'uninstall-plugin-effects'],
            ];
        }

        if ($operation === 'uninstall') {
            $documents[] = [
                'id' => 'uninstall-plugin-effects',
                'title' => 'Uninstall plugin effects',
                'category' => 'uninstall',
                'type' => 'behavior',
                'summary' => 'Uninstalling permanently removes the local plugin files and installed metadata.',
                'keywords' => ['uninstall', 'remove', 'delete', 'files', 'metadata', 'destructive'],
                'effects' => [
                    'storage' => 'The plugin directory is removed from local plugin storage.',
                    'metadata' => 'The installed plugin database record is deleted.',
                    'reinstall' => 'The package can be installed again from the repository catalog.',
                    'alternative' => 'Use DisablePluginTool when the plugin should remain available for later re-enabling.',
                ],
                'related' => ['uninstall-plugin-workflow', 'disable-plugin-effects', 'plugin-lifecycle'],
            ];
        }

        return $documents;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function repositoryDocuments(): array
    {
        return [
            [
                'id' => 'plugin-repositories-overview',
                'title' => 'Plugin repositories overview',
                'category' => 'repository',
                'type' => 'concept',
                'summary' => 'Repositories are URL sources that publish the package catalog used by Simplisiti plugins.',
                'keywords' => ['repository', 'repositories', 'url', 'source', 'catalog', 'plugin', 'package'],
                'definition' => 'A plugin repository is a configured URL that exposes package metadata and archives. Simplisiti uses these URLs to build the available plugin catalog and to download packages during installation.',
                'fields' => [
                    ['name' => 'url', 'type' => 'string', 'required' => true, 'validation' => 'url'],
                ],
                'related' => ['repository-catalog', 'update-plugin-repositories-workflow', 'sync-plugin-repositories-workflow'],
            ],
            [
                'id' => 'repository-catalog',
                'title' => 'Repository package catalog',
                'category' => 'repository',
                'type' => 'behavior',
                'summary' => 'The synchronized repository catalog powers AvailablePluginsTool and plugin installation.',
                'keywords' => ['catalog', 'packages', 'cache', 'synchronize', 'available', 'install'],
                'behavior' => [
                    'source' => 'Each configured repository contributes package metadata to the catalog.',
                    'cache' => 'The combined catalog is stored under repositories:packages.',
                    'automatic' => 'AvailablePluginsTool triggers synchronization automatically when the package cache is absent.',
                    'manual' => 'SyncPluginRepositoriesTool can refresh the catalog explicitly.',
                ],
                'related' => ['plugin-repositories-overview', 'available-plugins-response', 'sync-plugin-repositories-workflow'],
            ],
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function repositoryOperationDocuments(string $operation): array
    {
        if ($operation === 'update') {
            return [
                [
                    'id' => 'update-plugin-repositories-workflow',
                    'title' => 'Update plugin repositories workflow',
                    'category' => 'update',
                    'type' => 'workflow',
                    'summary' => 'Replaces the complete configured repository URL list.',
                    'keywords' => ['update', 'repositories', 'replace', 'url', 'configuration'],
                    'workflow' => [
                        'prepare' => 'Build the complete repositories array; this operation does not append to the current list.',
                        'submit' => 'Send it to UpdatePluginRepositoriesTool.',
                        'persist' => 'UpdateRepositoriesAction saves the new list in Simplisiti settings.',
                        'next' => 'Use SyncPluginRepositoriesTool to refresh the package catalog from the new URLs.',
                    ],
                    'related' => ['plugin-repositories-overview', 'update-plugin-repositories-validation', 'sync-plugin-repositories-workflow'],
                ],
                [
                    'id' => 'update-plugin-repositories-validation',
                    'title' => 'Update plugin repositories validation',
                    'category' => 'validation',
                    'type' => 'rules',
                    'summary' => 'Repository updates require a complete array of valid URLs.',
                    'keywords' => ['validation', 'repositories', 'array', 'url', 'required'],
                    'rules' => [
                        'repositories' => ['required', 'array'],
                        'repositories.*.url' => ['required', 'url'],
                    ],
                    'related' => ['update-plugin-repositories-workflow', 'plugin-repositories-overview'],
                ],
            ];
        }

        return [
            [
                'id' => 'sync-plugin-repositories-workflow',
                'title' => 'Sync plugin repositories workflow',
                'category' => 'sync',
                'type' => 'workflow',
                'summary' => 'Fetches package catalogs from all configured repositories and refreshes the package cache.',
                'keywords' => ['sync', 'synchronize', 'repositories', 'catalog', 'cache', 'logs'],
                'workflow' => [
                    'read' => 'Reads every configured repository URL.',
                    'request' => 'Requests its packages endpoint and combines returned package metadata.',
                    'persist' => 'Replaces the repositories:packages cache.',
                    'result' => 'Returns one status or error log per repository.',
                ],
                'related' => ['plugin-repositories-overview', 'repository-catalog', 'sync-plugin-repositories-effects'],
            ],
            [
                'id' => 'sync-plugin-repositories-effects',
                'title' => 'Sync plugin repositories effects',
                'category' => 'sync',
                'type' => 'behavior',
                'summary' => 'Synchronization refreshes catalog data but does not change installed plugin state.',
                'keywords' => ['sync', 'cache', 'install', 'enable', 'disable', 'uninstall', 'no change'],
                'effects' => [
                    'catalog' => 'The available package catalog is rebuilt from configured repositories.',
                    'plugins' => 'Installed plugin files and enabled/disabled statuses are not changed.',
                    'errors' => 'Repository request errors are returned in the synchronization logs while other repositories can continue.',
                ],
                'related' => ['sync-plugin-repositories-workflow', 'plugin-lifecycle'],
            ],
        ];
    }
}
