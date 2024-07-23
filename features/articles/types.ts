import { type update, type add } from '@/features/articles/valirators';
import { type z } from 'zod';

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
}
export type ArticleItem = Partial<Article>;

export type CreateArticleInput = z.infer<typeof add>;
export type UpdateArticleInput = z.infer<typeof update>;
