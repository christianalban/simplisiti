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

export const getResourcePreviewUrl = (type: ResourcePreview): string => {
    return `${baseURL}/page/${type}/preview`
}

export const getPluginResourcePreviewUrl = (type: ResourcePreview): string => {
    return `${baseURL}/page/plugin/${type}/preview`
}

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
