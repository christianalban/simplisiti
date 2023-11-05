import axios from "axios";
import { Component } from "../types/Component";

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
