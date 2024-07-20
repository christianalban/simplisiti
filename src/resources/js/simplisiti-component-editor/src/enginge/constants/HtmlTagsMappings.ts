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

export const HTML_ALIAS: HtmlAliasMapping = {
    'div': 'container',
    'a': 'ancord',
}

export type SupportedAlias = 'container' | 'ancord';
