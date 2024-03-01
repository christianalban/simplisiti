import { DataTableValue } from "../types/DataTable";
import { VariableType } from "../types/Variable"
import { useResources } from "./ResourceService";

const { resourceFromId } = useResources();

export const valueOfTextType = (content: string|number|DataTableValue): string => {
    if (typeof content === 'string') {
        return content;
    }
    return '';
}

export const valueOfResourceType = (content: string|number|DataTableValue): string => {
    if (typeof content === 'number' || typeof content === 'string') {
        return resourceFromId(+content).url || '';
    }
    return '';
}

export const getValueOfType = (type: VariableType, content: string|number|DataTableValue): string|number|DataTableValue => {
    switch (type) {
        case 'text':
            return valueOfTextType(content);
        case 'resource':
            return valueOfResourceType(content);
        case 'datatable':
            return content;
        case 'textarea':
            return valueOfTextType(content);
    }
}
