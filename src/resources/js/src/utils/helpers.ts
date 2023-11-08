export const inputValue = (value: EventTarget | null): string => {
    if (!value) {
        return '';
    }
    return (value as HTMLInputElement).value;
}

export const value = (value: EventTarget | null): string => {
    return inputValue(value).toLowerCase().trim().replaceAll(' ', '');
}
