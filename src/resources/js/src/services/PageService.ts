import axios from "axios";
import { Page, ResourcePreview } from "../types/Page";
import { baseURL } from "../axios";
import { Options } from "../types/Data";
import { addQueryToUrlFromOptions } from "../utils/helpers";
import { ContentValue } from "../types/Component";
import { ref } from "vue";

export const pages = ref<Page[]>([]);

export const createPage = async (page: Page): Promise<any> => {
    return await axios.post('page', page)
}

export const getPages = async (): Promise<any> => {
    return await axios.get('page')
}

export const getPage = async (pageId: number, options?: Options): Promise<any> => {
    const url = addQueryToUrlFromOptions(`page/${pageId}`, options);

    return await axios.get(url)
}

export const updatePage = async (page: Page): Promise<any> => {
    return await axios.put(`page/${page.id}`, page)
}

export const deletePage = async (pageId: number): Promise<any> => {
    return await axios.delete(`page/${pageId}`)
}

export const clonePage = async (pageId: number): Promise<any> => {
    return await axios.post(`page/${pageId}/clone`)
}

export const getResourcePreviewUrl = (type: ResourcePreview): string => {
    return `${baseURL}/page/${type}/preview`
}

export const getResourceEditorEngine = (type: ResourcePreview): string => {
    return `${baseURL}/page/editor/${type}/engine/`
}

export const getPluginResourcePreviewUrl = (type: ResourcePreview): string => {
    return `/page/plugin/${type}/preview`
}

/* TODO: Remove render component on backend */
/* @deprecated The engine render de html on the client side, so this feauture is not needed */
export const getComponentPreview = async (componentId: number, content: ContentValue): Promise<any> => {
    return await axios.post(`page/component/preview?component=${componentId}`, { content })
}

export const loadPages = async (): Promise<void> => {
    const response = await getPages();
    pages.value = response.data.data;
} 

export const usePages = () => ({
    pages,
    loadPages,
});
