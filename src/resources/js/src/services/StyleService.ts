import axios from "axios";
import { Style } from "../types/Style";

export const createStyle = async (style: Style): Promise<any> => {
    return await axios.post('style', style)
}

export const getStyles = async (): Promise<any> => {
    return await axios.get('style')
}

export const getStyle = async (styleId: number): Promise<any> => {
    return await axios.get(`style/${styleId}`)
}

export const updateStyle = async (style: Style): Promise<any> => {
    return await axios.put(`style/${style.id}`, style)
}

export const deleteStyle = async (styleId: number): Promise<any> => {
    return await axios.delete(`style/${styleId}`)
}

export const updateOrder = async (scriptOrder: ScriptOrder[]): Promise<any> => {
    return await axios.put(`style/order`, { list: scriptOrder })
}
