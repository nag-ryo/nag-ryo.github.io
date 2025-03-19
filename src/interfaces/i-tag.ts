import { ICmsBaseData } from "./i-cms-base-data";

export interface ITag extends ICmsBaseData {
    name: string;
    color: string;

    /** URLで使用。すべて小文字のケバブケース */
    urlName: string;
}
