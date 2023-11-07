import { Section } from "./Section";

export type PageEditionMode = 'adding-component' | 'editing-component' | 'none';

export interface Page {
    id?: number
    title?: string
    name: string
    url: string
    sections: Section[]
    sections_count?: number
}
