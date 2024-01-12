import axios from "axios";
import { Script } from "../types/Script";
import { ListOrder } from "../types/List";

export const createScript = async (script: Script): Promise<any> => {
    return await axios.post('script', script)
}

export const getScripts = async (): Promise<any> => {
    return await axios.get('script')
}

export const getScript = async (scriptId: number): Promise<any> => {
    return await axios.get(`script/${scriptId}`)
}

export const updateScript = async (script: Script): Promise<any> => {
    return await axios.put(`script/${script.id}`, script)
}

export const deleteScript = async (scriptId: number): Promise<any> => {
    return await axios.delete(`script/${scriptId}`)
}

export const updateOrder = async (scriptOrder: ListOrder[]): Promise<any> => {
    return await axios.put(`script/order`, { list: scriptOrder })
}
