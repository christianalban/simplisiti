import { Variable, VariableType } from "./Variable";

export interface Column {
    name: string;
    type: VariableType;
}

export interface DataTableValue {
    columns: Column[],
    rows: Variable[][];
}

export interface DataTableItem {
    [key: string]: any;
}
