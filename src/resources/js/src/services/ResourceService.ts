import axios from "axios";
import { Resource } from "../types/Resource";
import { Variable } from "../types/Variable";
import { Component } from "../types/Component";
import { ref } from "vue";

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

export const resources = ref<Resource[]>([]);

export const loadResources = async (): Promise<void> => {
    const response = await getResources();
    resources.value = response.data.data;
}

export const parseTextVariable = (component: Component, variable: Variable): Variable => {
    const value = component.content ? component.content[variable.name] : '';
    return {
        ...variable,
        default: value,
        value: value,
    }
}

export const parseResourceVariable = (component: Component, variable: Variable): Variable => {
    return {
        ...variable,
        default: component.content ? component.content[variable.name] : '',
        value: resources.value.find(resource => {
            if (!component.content) {
                return false;
            }

            return resource.id === +(component.content[variable.name] || 0)
        })?.url,
    }
}

export const resourceFromId = (resourceId: number): Resource => {
    return resources.value.find(resource => resource.id === resourceId) as Resource;
}

export const useResources = () => ({
    resources,
    loadResources,
    resourceFromId,
});
