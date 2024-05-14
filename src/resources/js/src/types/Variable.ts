import { DataTableValue } from "./DataTable";
import { DataSourceValue } from "./DataSource";
import { SettingMenu } from "./Setting";
// import { ResourcePreset } from "./Resource";

export type VariableType = 'text' | 'resource' | 'datatable' | 'textarea' | 'datasource' | 'action' | 'page';

export interface Variable {
    type: VariableType
    name: string
    default?: string|number|DataTableValue|DataSourceValue|undefined|null
    value?: string|number|DataTableValue|DataSourceValue|undefined|null
    // applied_settings?: SettingMenu[]|ResourcePreset[]
    applied_settings?: SettingMenu[]
    // settings?: SettingMenu[]|ResourcePreset[]
    settings?: SettingMenu[]
}
