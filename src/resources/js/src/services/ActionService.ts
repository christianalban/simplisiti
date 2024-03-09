import { ref } from "vue";
import axios from "axios";
import { Action } from "../types/Action";

export const actions = ref<Action[]>([]);

export const getActions = async (): Promise<any> => {
    return await axios.get('action')
}

export const loadActions = async (): Promise<void> => {
    const response = await getActions();
    actions.value = response.data.data;
}

export const useActions = () => ({
    actions,
    loadActions,
});
