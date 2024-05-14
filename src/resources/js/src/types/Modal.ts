export type ModalResponseLabel = 'cancel' | 'confirm'
export type ModalResponseCode = 0 | 1

export const ModalPropsLabel: {[label: string]: ModalResponseLabel} = {
    0: 'cancel',
    1: 'confirm'
}

export const ModalPropsCode: {[code :string]: ModalResponseCode} = {
    CANCEL: 0,
    CONFIRM: 1
}
