import { Options } from "../types/Data";
import { Group, GroupItem } from "../types/Group";

export const inputValue = (value: EventTarget | null): string => {
    if (!value) {
        return '';
    }
    return (value as HTMLInputElement).value;
}

export const value = (value: EventTarget | null): string => {
    return inputValue(value).toLowerCase().trim().replaceAll(' ', '');
}

export const groupItems = <T>(items: T[]): GroupItem<T>[] => items.map((data) => ({ data }));

export const nameParts = (name: string): string[] => name.match(/(^[a-z_-]*)(\/[a-z_-]+$)/) || [];

export const componentName = (name: string): string => nameParts(name)[2]?.replace(/\//, '') || name;

export const groupBy = <T>(items: GroupItem<T>[], key: string): Group<T> => {
    const group: Group<T> = {};
    
    return items.reduce((acc, item) => { 
        const data = item.data as any;
        const groupKeys = nameParts(data[key]);
        const groupKey = groupKeys && groupKeys[1] ? groupKeys[1] : 'default';

        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(data);
        return acc;
    }, group);
}

export const addQueryToUrlFromOptions = (url: string, options?: Options): string => {
    let urlFinal = url;

    urlFinal += `?withData=${options?.withData ? 'true' : 'false'}`;

    return urlFinal;
}
