import { DataTableValue } from "./DataTable";
import { DataSourceValue } from "./DataSource";

export type VariableType = 'text' | 'resource' | 'datatable' | 'textarea' | 'datasource';

export interface Variable {
    type: VariableType
    name: string
    default?: string|number|DataTableValue|DataSourceValue|undefined|null
    value?: string|number|DataTableValue|DataSourceValue|undefined|null
}
