import axios from "axios";
// import { Flow } from "../types/Flow";
// import { baseURL } from "../axios";
// import { Options } from "../types/Data";
// import { addQueryToUrlFromOptions } from "../utils/helpers";
// import { ContentValue } from "../types/Component";

// export const createFlow = async (flow: Page): Promise<any> => {
//     return await axios.post('page', page)
// }

export const getFlows = async (): Promise<any> => {
    return await axios.get('flow')
}

// export const getPage = async (pageId: number, options?: Options): Promise<any> => {
//     const url = addQueryToUrlFromOptions(`page/${pageId}`, options);
//
//     return await axios.get(url)
// }
//
// export const updatePage = async (page: Page): Promise<any> => {
//     return await axios.put(`page/${page.id}`, page)
// }
//
// export const deletePage = async (pageId: number): Promise<any> => {
//     return await axios.delete(`page/${pageId}`)
// }
//
// export const getResourcePreviewUrl = (type: ResourcePreview): string => {
//     return `${baseURL}/page/${type}/preview`
// }
//
// export const getPluginResourcePreviewUrl = (type: ResourcePreview): string => {
//     return `${baseURL}/page/plugin/${type}/preview`
// }
//
// export const getComponentPreview = async (componentId: number, content: ContentValue): Promise<any> => {
//     return await axios.post(`page/component/preview?component=${componentId}`, { content })
// }
//
