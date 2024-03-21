import { DataTableValue } from "./DataTable";
import { DataSourceValue } from "./DataSource";
import { Variable } from "./Variable";

export interface ComponentContent {
    [key: string]: string|number|DataTableValue|DataSourceValue|null|undefined
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

export interface ContentValue {
    [key: string]: any
}
