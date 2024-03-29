import axios from "axios";
import { Page, ResourcePreview } from "../types/Page";
import { baseURL } from "../axios";
import { Options } from "../types/Data";
import { addQueryToUrlFromOptions } from "../utils/helpers";

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
