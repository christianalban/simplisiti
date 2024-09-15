export type ContentType = 'text';

export const ContentTypeMapping: {
    [key: string]: ContentType;
} = {
    'a': 'text',
    'p': 'text',
    'h1': 'text',
}

export interface ContentTypeValue {
    type: ContentType,
    content: any,
}
