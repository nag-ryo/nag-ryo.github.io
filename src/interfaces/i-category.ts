import { ICmsBaseData } from "./i-cms-base-data";

export interface ICategory extends ICmsBaseData {
    name: typeof CATEGORY[keyof typeof CATEGORY]; // CATEGORYの値を型として使用
}

export const CATEGORY = {
    TECH: 'Tech',
    IDEA: 'Idea',
    DIARY: 'Diary',
} as const;

// CATEGORYの型を取得
export type CategoryType = typeof CATEGORY[keyof typeof CATEGORY];
