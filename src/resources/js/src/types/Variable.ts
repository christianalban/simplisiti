import { DataTableValue } from "./DataTable";
import { DataSourceValue } from "./DataSource";
import { SettingMenu } from "./Setting";

export type VariableType = 'text' | 'resource' | 'datatable' | 'textarea' | 'datasource' | 'action' | 'page';

export interface Variable {
    type: VariableType
    name: string
    default?: string|number|DataTableValue|DataSourceValue|undefined|null
    value?: string|number|DataTableValue|DataSourceValue|undefined|null
    settings?: SettingMenu[]
}
