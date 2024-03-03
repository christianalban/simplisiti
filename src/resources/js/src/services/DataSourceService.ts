import { ref } from "vue";
import { DataSource } from "../types/DataSource";
import axios from "axios";

export const sources = ref<DataSource[]>([]);

export const getSources = async (): Promise<any> => {
    return await axios.get('source')
}

export const loadSources = async (): Promise<void> => {
    const response = await getSources();
    sources.value = response.data.data;
}

export const useSources = () => ({
    sources,
    loadSources,
});
