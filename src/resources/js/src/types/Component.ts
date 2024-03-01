import { DataTableValue } from "./DataTable";
import { Variable } from "./Variable";

export interface ComponentContent {
    [key: string]: string|number|DataTableValue
}

export interface Component {
    id?: number
    order?: number
    name: string
    html: string
    variables: Variable[]
    content_id?: number
    content?: ComponentContent
}
