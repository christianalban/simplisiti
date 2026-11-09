import axios from "axios";
import { getPluginResourcePreviewUrl, getResourcePreviewUrl } from "../services/PageService";
import { Options, QueryParams } from "../types/Data";
import { Group, GroupItem } from "../types/Group";

export const inputValue = (value: EventTarget | null): string => {
    if (!value) {
        return '';
    }
    return (value as HTMLInputElement).value;
}

export const value = (value: string | EventTarget | null): string => {
    let valueFinal = '';
    if (typeof value === 'string') {
        valueFinal = value;
    } else {
        valueFinal = inputValue(value);
    }
    return valueFinal.toLowerCase().trim().replaceAll(' ', '');
}

export const groupItems = <T>(items: T[]): GroupItem<T>[] => items.map((data) => ({ data }));

export const nameParts = (name: string): string[] => name.match(/(^[0-9a-z_-]*)(\/[0-9a-z_-]+$)/) || [];

export const labelName = (name: string): string => nameParts(name)[2]?.replace(/\//, '') || name;

export const componentName = (name: string): string => labelName(name);

export const compareStrings = (value: string, filter: string): boolean => {
    return value.toLowerCase().includes(filter.toLowerCase());
}

export const mergeReorderedItems = <T>(source: T[], visible: T[], reordered: T[]): T[] => {
    const visibleItems = new Set(visible);
    let reorderedIndex = 0;

    return source.map((item) => {
        if (!visibleItems.has(item)) {
            return item;
        }

        return reordered[reorderedIndex++];
    });
}

export const groupBy = <T>(items: GroupItem<T>[], key: string): Group<T> => {
    const group: Group<T> = {};
    
    const data = items.reduce((acc, item) => { 
        const data = item.data as any;
        const groupKeys = nameParts(data[key]);
        const groupKey = groupKeys && groupKeys[1] ? groupKeys[1] : 'default';

        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(data);
        return acc;
    }, group);

    return data;
}

export const filterBy = <T>(items: GroupItem<T>[], value: string, key: string | string[]): GroupItem<T>[] => {
    return items.filter((item) => {
        if (Array.isArray(key)) {
            return key.some((k) => ((item.data as any)[k] as any).toLowerCase().includes(value.toLowerCase()));
        }
        return ((item.data as any)[key] as any).toLowerCase().includes(value.toLowerCase());
    });
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

export let previewSheet: CSSStyleSheet | null = null;
let previewSheetPromise: Promise<CSSStyleSheet> | null = null;

export const loadPreviewSheet = async (): Promise<CSSStyleSheet> => {
    if (!previewSheetPromise) {
        previewSheetPromise = axios.get<string>(getResourcePreviewUrl('style'))
            .then((response) => {
                const sheet = new CSSStyleSheet();
                sheet.replaceSync(response.data);
                previewSheet = sheet;
                return sheet;
            })
            .catch((error) => {
                previewSheetPromise = null;
                throw error;
            });
    }

    return previewSheetPromise;
};

export let pluginSheet: CSSStyleSheet | null = null;
let pluginSheetPromise: Promise<CSSStyleSheet> | null = null;

export const loadPluginSheet = async (): Promise<CSSStyleSheet> => {
    if (!pluginSheetPromise) {
        pluginSheetPromise = axios.get<string>(getPluginResourcePreviewUrl('style'))
            .then((response) => {
                const sheet = new CSSStyleSheet();
                sheet.replaceSync(response.data);
                pluginSheet = sheet;
                return sheet;
            })
            .catch((error) => {
                pluginSheetPromise = null;
                throw error;
            });
    }

    return pluginSheetPromise;
};

type PreviewResources = {
    style: string;
    script: string;
};

let previewResourcesPromise: Promise<PreviewResources> | null = null;

export const loadResourcesPreview = (): Promise<PreviewResources> => {
    if (!previewResourcesPromise) {
        previewResourcesPromise = Promise.all([
            axios.get<string>(getResourcePreviewUrl('style')),
            axios.get<string>(getResourcePreviewUrl('script')),
        ])
            .then(([styleResponse, scriptResponse]) => ({
                style: styleResponse.data,
                script: scriptResponse.data,
            }))
            .catch((error) => {
                previewResourcesPromise = null;
                throw error;
            });
    }

    return previewResourcesPromise;
};

let pluginResourcesPromise: Promise<PreviewResources> | null = null;

export const loadPluginResourcesPreview = (): Promise<PreviewResources> => {
    if (!pluginResourcesPromise) {
        pluginResourcesPromise = Promise.all([
            axios.get<string>(getPluginResourcePreviewUrl('style')),
            axios.get<string>(getPluginResourcePreviewUrl('script')),
        ])
            .then(([styleResponse, scriptResponse]) => ({
                style: styleResponse.data,
                script: scriptResponse.data,
            }))
            .catch((error) => {
                pluginResourcesPromise = null;
                throw error;
            });
    }

    return pluginResourcesPromise;
};

export const clearLoadedResources = () => {
    previewSheet = null;
    previewSheetPromise = null;
    pluginSheet = null;
    pluginSheetPromise = null;
    previewResourcesPromise = null;
    pluginResourcesPromise = null;
}

export const toKebabCase= (str: string): string => {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
        .toLowerCase();
}

export const getPathFromPluginName = (name: string): string => {
    const parts = name.match(/(?<=\\)[^\\]+(?=\\[^\\]+$)/) || [];
    if (parts.length === 0) {
        return '';
    }
    return toKebabCase(parts[0] as string);
}

export const sanitizeUrl = (url: string): string => {
    if (!url.startsWith('/')) {
        url = `/${url}`;
    }
    return url;
}
