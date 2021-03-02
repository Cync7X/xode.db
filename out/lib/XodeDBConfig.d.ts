export interface XodeDBConfig {
    filename: string;
    saveOnPush: boolean;
    humanReadable: boolean;
    separator: string;
}
export declare class Config implements XodeDBConfig {
    filename: string;
    humanReadable: boolean;
    saveOnPush: boolean;
    separator: string;
    constructor(filename: string, saveOnPush?: boolean, humanReadable?: boolean, separator?: string);
}
