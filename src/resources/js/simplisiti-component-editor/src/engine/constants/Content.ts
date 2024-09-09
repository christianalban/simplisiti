export type ContentType = 'text';

export const ContentTypeMapping: {
    [key: string]: ContentType;
} = {
    'a': 'text',
}

export interface ContentTypeValue {
    type: ContentType,
    content: any,
}
