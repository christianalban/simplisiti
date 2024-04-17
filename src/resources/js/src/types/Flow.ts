import { FlowAction } from "./FlowAction";

export interface Flow {
    id?: number
    name: string
    is_disabled: boolean
    flow_actions: FlowAction[]
}
