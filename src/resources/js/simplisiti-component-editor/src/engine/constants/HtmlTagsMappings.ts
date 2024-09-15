export interface HtmlTagMapping {
    [key: string]: string;
}

export const HTML_TITLES: HtmlTagMapping = {
    'div': 'Contenedor',
    'a': 'Enlace',
    'p': 'Párrafo',
}

export interface HtmlAliasMapping {
    [key: string]: SupportedAlias;
}

export interface HtmlIconsMapping {
    [key: string]: SupportedIcons;
}

export const HTML_ALIAS: HtmlAliasMapping = {
    'div': 'container',
    'a': 'ancord',
    'p': 'paragraph',
}

export const HTML_ICONS: HtmlIconsMapping = {
    'div': 'square',
    'a': 'link',
    'p': 'paragraph',
}

export type SupportedAlias = 'container' | 'ancord' | 'paragraph';

export type SupportedIcons = 'square' | 'link' | 'paragraph';

export type SupportedTags = 'div' | 'a' | 'p';
