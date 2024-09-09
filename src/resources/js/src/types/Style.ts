export interface Style {
    id?: number
    name: string
    styles?: string
    is_active?: boolean
}

export interface StyleValue {
    [key: string]: string;
}
