import axios from "axios";
import { Component, ComponentContent } from "../types/Component";
import { Options } from "../types/Data";
import { addQueryToUrlFromOptions } from "../utils/helpers";
import { Variable } from "../types/Variable";

export const createComponent = async (component: Component): Promise<any> => {
    return await axios.post('component', component)
}

export const getComponents = async (options?: Options): Promise<any> => {
    const url = addQueryToUrlFromOptions('component', options);
    return await axios.get(url)
}

export const getComponent = async (componentId: number, options?: Options): Promise<any> => {
    const url = addQueryToUrlFromOptions(`component/${componentId}`, options);

    return await axios.get(url)
}

export const updateComponent = async (component: Component): Promise<any> => {
    return await axios.put(`component/${component.id}`, component)
}

export const deleteComponent = async (componentId: number): Promise<any> => {
    return await axios.delete(`component/${componentId}`)
}

export const mapWithoutSettingsData = (variables: Variable[]): Variable[] => {
    const tempVariables = JSON.parse(JSON.stringify(variables)) as Variable[];
    return tempVariables.filter(variable => variable.name !== '').map(variable => {
            variable.settings = variable.settings?.map(setting => {
                setting.items = setting.items.map(item => ({
                    id: item.id,
                    plugin: item.plugin,
                    name: item.name,
                    label: item.label,
                    description: item.description,
                    type: item.type,
                    value: item.value,
                    required: item.required,
                }));

                return setting;
            })
            return variable;
        })
}

