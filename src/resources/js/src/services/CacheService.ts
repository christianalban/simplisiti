import axios from "axios";

export const clearAll = async (): Promise<any> => {
    return await axios.delete('cache/clear-all')
}
