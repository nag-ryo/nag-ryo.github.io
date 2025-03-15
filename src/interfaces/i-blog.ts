import { ICategory } from './i-category';
import { ITag } from './i-tag';

export interface IBlog {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  category: ICategory;
  tags: ITag[];
}
