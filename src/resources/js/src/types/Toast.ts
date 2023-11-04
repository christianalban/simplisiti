export type ToastType = 'success' | 'error' | 'warning' | 'info'

export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface Toast {
    type: ToastType
    title: string
    message: string
    timestamp?: number
}
