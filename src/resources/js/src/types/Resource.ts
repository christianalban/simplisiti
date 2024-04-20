export interface Resource {
    id?: number
    name?: string
    path?: string
    url?: string
    file?: File | File[]
}

export type ResourceUploadType = 'single' | 'batch'

export interface ResourcePreset {
    breakpoint: number
    width: number
    height: number
    coordinates: {
        width: number
        height: number
        left: number
        top: number
    }
}
