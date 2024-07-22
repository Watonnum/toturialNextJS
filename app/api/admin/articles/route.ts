import { create } from '@/features/articles/api';
import { type CreateArticleInput } from '@/features/articles/types';
import { add } from '@/features/articles/valirators';

export const POST = async (req: Request) => {
  const form = await (req.json() as Promise<CreateArticleInput>); //ดึงข้อมูล payload
  const formValidation = await add.safeParseAsync(form); //safeParseAsync method สำหรับการ validate ข้อมูล

  if (!formValidation.success) {
    return new Response(JSON.stringify(formValidation.error), {
      status: 422,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const article = await create(formValidation.data);
  return new Response(JSON.stringify(article), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  }); //ใช้ new Respone เพราะเราสามารถกำหนดได้เพิ่มเติมนอกเหนือจากการแปลงข้อมูล articleเป็นjson นั่นคือ statusและheaderหรือ mype type
};
