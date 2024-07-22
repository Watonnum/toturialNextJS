import { findById, update } from '@/features/articles/api';
import ArticleDetails from '@/features/articles/components/ArticleDetails';
import { type Article } from '@/features/articles/types';
import { revalidatePath } from 'next/cache';

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export const generateStaticParams = () => {
  return [{ id: '1' }, { id: '3' }];
};
// Server action
const updateArticle = async (id: Article['id']) => {
  'use server';
  await update(id, { title: 'yyy' });
  revalidatePath(`/articles/${id}`);
};

const ArticlePage = async ({ params: { id } }: ArticlePageProps) => {
  const article = await findById(+id);

  if (!article) return <div> No article found</div>;
  return (
    <ArticleDetails onUpdate={updateArticle} article={article}></ArticleDetails>
  );
};

export default ArticlePage;
