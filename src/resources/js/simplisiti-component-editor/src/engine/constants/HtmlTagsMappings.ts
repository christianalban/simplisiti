export interface HtmlTagMapping {
    [key: string]: string;
}

export const HTML_TITLES: HtmlTagMapping = {
    'div': 'Contenedor',
    'a': 'Enlace',
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
}

export const HTML_ICONS: HtmlIconsMapping = {
    'div': 'square',
    'a': 'link',
}

export type SupportedAlias = 'container' | 'ancord';

export type SupportedIcons = 'square' | 'link';

export type SupportedTags = 'div' | 'a';
