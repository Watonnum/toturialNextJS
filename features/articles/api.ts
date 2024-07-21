import { type Article } from '@/features/articles/types';
import { faker } from '@faker-js/faker';

export const findAll = () => {
  const length = faker.helpers.rangeToNumber({ min: 3, max: 10 });
  const articles = Array.from({ length }).map(() => ({
    id: faker.number.int(),
    title: faker.lorem.sentence(),
  }));

  return Promise.resolve(articles);
};

export const findById = async (id: Article['id']) => {
  const res = await fetch(`http://localhost:5151/articles/${id}`, {
    next: { revalidate: 15 },
  });

  return res.json() as Promise<Article>;
};
