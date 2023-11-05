import { Variable } from "./Variable";

export interface Component {
    id?: number
    name: string
    html: string
    variables: Variable[]
}
