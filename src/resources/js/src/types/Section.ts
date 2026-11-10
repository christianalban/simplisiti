import { Component } from "./Component"

export interface Section {
    id?: number
    order: number
    sp_class_list?: string[]
    sp_style_list?: Record<string, string>
    components: Component[]
}
