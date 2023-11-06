export const value = (value: EventTarget | null): string => {
    if (!value) {
        return '';
    }
    return (value as HTMLInputElement).value.toLowerCase().trim().replaceAll(' ', '');
}
