import axios from "axios";
import { Repository } from "../types/Plugin";

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
