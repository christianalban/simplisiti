export interface Group<T> {
    [key: string]: T[];
}

export interface GroupItem<T> {
    data: T;
}
