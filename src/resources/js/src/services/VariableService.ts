import { addQueryToUrlFromOptions } from "../utils/helpers";
import axios from "axios";
import { Variable, VariableType } from "../types/Variable";

export const variableHasSettings = (variableType: VariableType): boolean => {
    if (!variableType) return false;

    return ['datasource', null].includes(variableType);
}

export const getComponentVariableSettings = async (componentId: string, variable: Variable): Promise<any> => {
    const url = addQueryToUrlFromOptions(`component/${componentId}/variable/${variable.name}/${variable.type}/settings`, { withSettings: true }, { default: variable.default });

    return await axios.get(url)
}
