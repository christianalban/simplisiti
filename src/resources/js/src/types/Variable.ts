import { DataTableValue } from "./DataTable";

export type VariableType = 'text' | 'resource' | 'datatable' | 'textarea' | 'datasource';

export interface Variable {
    type: VariableType
    name: string
    default?: string|number|DataTableValue|undefined|null
    value?: string|number|DataTableValue|undefined|null
}
