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

export const filterBy = <T>(items: GroupItem<T>[], value: string, key: string): GroupItem<T>[] => {
    return items.filter((item) => {
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

export let previewSheet: CSSStyleSheet;

export const loadPreviewSheet = async (): Promise<CSSStyleSheet> => {
    if (previewSheet) {
        return previewSheet;
    }
    previewSheet = new CSSStyleSheet();
    const styleUrl = getResourcePreviewUrl('style');
    const response = await axios.get(styleUrl);
    previewSheet.replaceSync(response.data);

    return previewSheet;
};

export let pluginSheet: CSSStyleSheet;

export const loadPluginSheet = async (): Promise<CSSStyleSheet> => {
    if (pluginSheet) {
        return pluginSheet;
    }
    pluginSheet = new CSSStyleSheet();
    const styleUrl = getPluginResourcePreviewUrl('style');
    const response = await axios.get(styleUrl);
    pluginSheet.replaceSync(response.data);

    return pluginSheet;
};

let previewStyles: HTMLStyleElement; 
let previewScript: HTMLScriptElement; 

export const loadResourcesPreview = async (): Promise<(HTMLStyleElement|HTMLScriptElement)[]> => {
    if (previewStyles && previewScript) {
        const clonedPreviewStyles = cloneElement<HTMLStyleElement>(previewStyles);
        const clonedPreviewScript = cloneElement<HTMLScriptElement>(previewScript);

        return [clonedPreviewStyles, clonedPreviewScript];
    }

    previewStyles = document.createElement('style');
    previewScript = document.createElement('script');

    const styleUrl = getResourcePreviewUrl('style');
    const responseStyle = await axios.get(styleUrl);

    const scriptUrl = getResourcePreviewUrl('script');
    const responseScript = await axios.get(scriptUrl);

    previewStyles.textContent = responseStyle.data;

    previewScript.textContent = responseScript.data;
    previewScript.async = true;

    return [previewStyles, previewScript];
};

const cloneElement = <T>(element: HTMLElement): T => {
    return element.cloneNode(true) as T;
}

let pluginStyles: HTMLStyleElement; 
let pluginScript: HTMLScriptElement;

export const loadPluginResourcesPreview = async (): Promise<(HTMLStyleElement|HTMLScriptElement)[]> => {
    if (pluginStyles && pluginScript) {
        
        const clonedPluginStyles = cloneElement<HTMLStyleElement>(pluginStyles);
        const clonedPluginScript = cloneElement<HTMLScriptElement>(pluginScript);

        return [clonedPluginStyles, clonedPluginScript];
    }

    pluginStyles = document.createElement('style');
    pluginScript = document.createElement('script');

    const styleUrl = getPluginResourcePreviewUrl('style');
    const responseStyle = await axios.get(styleUrl);

    const scriptUrl = getPluginResourcePreviewUrl('script');
    const responseScript = await axios.get(scriptUrl);

    pluginStyles.textContent = responseStyle.data;

    pluginScript.textContent = responseScript.data;
    pluginScript.async = true;

    return [pluginStyles, pluginScript];
};
