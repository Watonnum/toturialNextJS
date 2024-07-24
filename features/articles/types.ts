import { type findById, type findAll } from '@/features/articles/api';

export type ArticleItem = Awaited<ReturnType<typeof findAll>>[number];
export type ArticleDetail = NonNullable<Awaited<ReturnType<typeof findById>>>;
