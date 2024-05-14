import { Options, QueryParams } from "../types/Data";
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

export const nameParts = (name: string): string[] => name.match(/(^[0-9a-z_-]*)(\/[0-9a-z_-]+$)/) || [];

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

export const addQueryToUrlFromOptions = (url: string, options?: Options, query?: QueryParams): string => {
    let urlFinal = url;

    const optionsCount = Object.keys(options || {}).length;

    urlFinal += `?withData=${options?.withData ? 'true' : 'false'}`;

    urlFinal += `${optionsCount >= 1 ? '&' : '?'}withSettings=${options?.withSettings ? 'true' : 'false'}`;

    if (query) {
        urlFinal += `${optionsCount ? '&' : '?'}${Object.keys(query).map(key => `${key}=${query[key]}`).join('&')}`;
    }

    return urlFinal;
}

export const isMobileScreen = (): boolean => window.innerWidth < 768;
