export type VariableType = 'text' | 'resource';

export interface Variable {
    type: VariableType
    name: string
    default: string
}
