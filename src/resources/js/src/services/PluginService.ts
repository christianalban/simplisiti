import axios from "axios";
import { Repository, UploadFilePayload } from "../types/Plugin";
import { getPathFromPluginName, sanitizeUrl } from "../utils/helpers";

export const getRepositories = async (): Promise<any> => {
    return await axios.get('plugin/repositories')
}

export const getPackages = async (): Promise<any> => {
    return await axios.get('plugin/packages')
}

export const updateRepositories = async (repositories: Repository[]): Promise<any> => {
    return await axios.put('plugin/repositories', { repositories })
}

export const syncRepositories = async (): Promise<any> => {
    return await axios.post('plugin/repositories/sync')
}

export const installPlugin = async (name: string): Promise<any> => {
    return await axios.post(`plugin/packages/install`, { name })
}

export const uninstallPlugin = async (name: string): Promise<any> => {
    return await axios.post(`plugin/packages/uninstall`, { name })
}

export const disablePlugin = async (name: string): Promise<any> => {
    return await axios.post(`plugin/packages/disable`, { name })
}

export const enablePlugin = async (name: string): Promise<any> => {
    return await axios.post(`plugin/packages/enable`, { name })
}

export const uploadFile = async (payload: UploadFilePayload, plugin: string): Promise<any> => {
    const pluginNamespacePath = getPathFromPluginName(plugin)
    const formData = new FormData();
    formData.append('file', payload.file);

    return await axios.post(`${pluginNamespacePath}${sanitizeUrl(payload.url)}`, formData);
}
