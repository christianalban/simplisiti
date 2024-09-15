export interface HtmlTagMapping {
    [key: string]: string;
}

export const HTML_TITLES: HtmlTagMapping = {
    'div': 'Contenedor',
    'a': 'Enlace',
    'p': 'Párrafo',
    'h1': 'Cabecera 1',
    'img': 'Imagen',
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
    'h1': 'header1',
    'img': 'image',
}

export const HTML_ICONS: HtmlIconsMapping = {
    'div': 'square',
    'a': 'link',
    'p': 'paragraph',
    'h1': 'heading',
    'img': 'image',
}

export type SupportedAlias = 'container' | 'ancord' | 'paragraph' | 'header1' | 'image';

export type SupportedIcons = 'square' | 'link' | 'paragraph' | 'heading' | 'image';

export type SupportedTags = 'div' | 'a' | 'p' | 'h1' | 'img';
