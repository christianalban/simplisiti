import axios from "axios";
import { SettingRequest } from "../types/Setting";

export const getSettings = async (): Promise<any> => {
    return await axios.get('setting')
}

export const updateSettings = async (data: SettingRequest): Promise<any> => {
    return await axios.put('setting', data)
}
