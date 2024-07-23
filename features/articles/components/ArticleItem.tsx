import type * as types from '@/features/articles/types';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/features/shadcn/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { truncate } from 'lodash';
const ArticleItem = ({ id, title, excerpt, image }: types.ArticleItem) => {
  return (
    <Link href={`/articles/${id}`}>
      <Card className="h-full">
        <div className="relative h-[200px] w-[200px]">
          <Image
            className="object-cover"
            src={image}
            alt={title}
            fill
            sizes="(min-width: 800px) 50vw,100vw"
          ></Image>
        </div>
        <CardHeader>
          <CardTitle>{truncate(title, { length: 30 })}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
export default ArticleItem;
