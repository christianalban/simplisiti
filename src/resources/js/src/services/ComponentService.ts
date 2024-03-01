import axios from "axios";
import { Component, ComponentContent } from "../types/Component";

export const createComponent = async (component: Component): Promise<any> => {
    return await axios.post('component', component)
}

export const getComponents = async (): Promise<any> => {
    return await axios.get('component')
}

export const getComponent = async (componentId: number): Promise<any> => {
    return await axios.get(`component/${componentId}`)
}

export const updateComponent = async (component: Component): Promise<any> => {
    return await axios.put(`component/${component.id}`, component)
}

export const deleteComponent = async (componentId: number): Promise<any> => {
    return await axios.delete(`component/${componentId}`)
}

export const getDefaultContent = (component: Component, name?: string): any => {
    if (name) {
        return component.variables.find(variable => variable.name === name)?.default || '';
    }

    return component.variables.reduce<ComponentContent>((content, variable) => {
        content[variable.name] = variable.default || '';
        return content;
    }, {})
}
