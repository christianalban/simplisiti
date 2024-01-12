import { RouteLocationRaw } from "vue-router"

export interface ListItem {
    id?: number
    name: string
    url: RouteLocationRaw
    is_active?: boolean
}
