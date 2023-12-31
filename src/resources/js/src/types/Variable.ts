import { DataTableValue } from "./DataTable";

export type VariableType = 'text' | 'resource' | 'datatable';

export interface Variable {
    type: VariableType
    name: string
    default?: string|number|DataTableValue
    value?: string|number
}
