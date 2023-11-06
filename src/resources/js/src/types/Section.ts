import { Component } from "vue";

export interface Section {
    id?: number
    order: number
    components: Component[]
}
