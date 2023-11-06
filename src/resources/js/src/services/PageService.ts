import axios from "axios";
import { Page } from "../types/Page";

export const createPage = async (page: Page): Promise<any> => {
    return await axios.post('page', page)
}

export const getPages = async (): Promise<any> => {
    return await axios.get('page')
}

export const getPage = async (pageId: number): Promise<any> => {
    return await axios.get(`page/${pageId}`)
}

export const updatePage = async (page: Page): Promise<any> => {
    return await axios.put(`page/${page.id}`, page)
}

export const deletePage = async (pageId: number): Promise<any> => {
    return await axios.delete(`page/${pageId}`)
}
