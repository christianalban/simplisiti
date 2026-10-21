import axios from "axios";
import { SettingMenu, SettingRequest } from "../types/Setting";
import { ref } from "vue";

export const settings = ref<SettingMenu[]>([]);

export const getSettings = async (): Promise<any> => {
    return await axios.get('setting')
}

export const updateSettings = async (data: SettingRequest): Promise<any> => {
    return await axios.put('setting', data)
}

export const loadSettings = async (): Promise<void> => {
    const response = await getSettings();
    settings.value = response.data.data;
} 

export const useSettings = () => ({
    settings,
    loadSettings,
});
