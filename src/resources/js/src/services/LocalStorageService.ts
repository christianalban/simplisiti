export const putStorage = (key: string, value: string): void => {
    window.localStorage.setItem(key, value);
}

export const getStorage = <T>(key: string, defaultValue: T): T | any => {
    const value = window.localStorage.getItem(key) || defaultValue;

    if (value === 'true') {
        return true; 
    }

    if (value === 'false') {
        return false; 
    }

    return value;
}
