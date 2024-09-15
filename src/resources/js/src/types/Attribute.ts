export type AttributeType = 'href' | 'src';

export interface AttributeValue {
    type: AttributeType,
    content: any,
}
