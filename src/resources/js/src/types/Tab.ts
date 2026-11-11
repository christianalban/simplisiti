import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Tab<T> {
    id?: string
    title: string
    item: T
    icon?: IconProp | null
}
