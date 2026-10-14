import { Variable, VariableType } from "./Variable";

export interface ColumnOptions {
    [key: string]: any;
}

export interface Column {
    name: string;
    type: VariableType;
    options?: ColumnOptions;
    editable?: boolean;
    add_rows?: boolean;
}

export interface DataTableValue {
    columns: Column[],
    rows: Variable[][];
}

export interface DataTableItem {
    [key: string]: any;
}
