import { type findAll } from '@/features/articles/api';
import ArticleItem from '@/features/articles/components/ArticleItem';
import { Separator } from '@/features/shadcn/components/ui/separator';

interface ArticleListProps {
  articles: Awaited<ReturnType<typeof findAll>>;
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <section>
      <h1 className="my-4 text-center text-4xl font-bold">All Articles</h1>
      <Separator className="my-4" />
      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleItem key={article.id} {...article}></ArticleItem>
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
