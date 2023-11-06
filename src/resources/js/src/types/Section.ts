import { Component } from "./Component"

export interface Section {
    id?: number
    order: number
    components: Component[]
}
