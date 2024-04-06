export interface Resource {
    id?: number
    name?: string
    path?: string
    url?: string
    file?: File | File[]
}

export type ResourceUploadType = 'single' | 'batch'
