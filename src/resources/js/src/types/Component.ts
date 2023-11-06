import { Variable } from "./Variable";

export interface Component {
    id?: number
    order?: number
    name: string
    html: string
    variables: Variable[]
    content_id?: number
    content?: {
        [key: string]: string
    }
}
