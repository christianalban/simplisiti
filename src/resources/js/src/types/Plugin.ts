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

export interface UploadFileOptions {
    accept?: string
    url?: string
}

export interface ActionButtonOptions {
    button_text?: string
    url?: string
    with_confirmation?: boolean
    confirmation_title?: string
    confirmation_text?: string
    confirmation_accept_button_text?: string
    confirmation_cancel_button_text?: string
}

export interface UploadFilePayload {
    url: string
    file: File
}

export interface DownloadFileOptions {
    url?: string
}
