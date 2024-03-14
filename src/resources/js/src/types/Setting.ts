export type SettingType = 'text' | 'textarea' | 'number' | 'select';

export interface SettingRequest {
    items: Setting[]
}

export interface SettingMenu {
    label: string
    description?: string
    items: Setting[]
    value: string
}

export interface Setting {
    id?: number
    plugin: string
    name: string
    label: string
    description?: string
    type: SettingType
    value?: string
    required: boolean
    data?: any
}
