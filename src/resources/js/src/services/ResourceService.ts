import axios from "axios";
import { Resource } from "../types/Resource";

export const createResource = async (resource: Resource): Promise<any> => {
    if (!resource.file) {
        throw new Error('File is required')
    }

    const formData = new FormData();
    formData.append('file', resource.file);
    formData.append('name', resource.name);

    return await axios.post('resource', formData)
}

export const getResources = async (): Promise<any> => {
    return await axios.get('resource')
}

export const getResource = async (resourceId: number): Promise<any> => {
    return await axios.get(`resource/${resourceId}`)
}

export const updateResource = async (resource: Resource): Promise<any> => {
    const formData = new FormData();
    formData.append('name', resource.name);
    formData.append('_method', 'PUT');
    if (resource.file) {
        formData.append('file', resource.file || null);
    }

    return await axios.post(`resource/${resource.id}`, formData)
}

export const deleteResource = async (resourceId: number): Promise<any> => {
    return await axios.delete(`resource/${resourceId}`)
}