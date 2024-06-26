export type SyncStatus = 'no-synced' |'synced' | 'syncing' | 'error';

export type PluginStatus = 'enabled' | 'disabled' | 'not-installed';

export type PluginRequest = 'installing' | 'installed' | 'uninstalling' | 'uninstalled' | 'disabling';

export interface Plugin {
    name: string;
    description: string;
    status: PluginStatus;
    version: string;
    author: string;
    md5: string;
}

export interface Repository {
    url: string;
}
