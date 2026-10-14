import { DataTableValue } from "./DataTable";
import { DataSourceValue } from "./DataSource";
import { SettingMenu } from "./Setting";
// import { ResourcePreset } from "./Resource";

export type VariableInputType = 'text' | 'number' | 'tel' | 'email' | 'url' | 'password' | 'checkbox' | 'radio' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color';
export type VariableType = VariableInputType | 'resource' | 'datatable' | 'textarea' | 'select' | 'datasource' | 'action' | 'page';

export interface Variable {
    type: VariableType
    name: string
    default?: string|number|DataTableValue|DataSourceValue|undefined|null
    value?: string|number|DataTableValue|DataSourceValue|undefined|null
    // applied_settings?: SettingMenu[]|ResourcePreset[]
    applied_settings?: SettingMenu[]
    // settings?: SettingMenu[]|ResourcePreset[]
    settings?: SettingMenu[]
    options?: any
}
