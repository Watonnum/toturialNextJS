// export const GET = () => {
//   const articles = [{ id: 1 }, { id: 2 }];
//   //return Response.json(articles);
//   return new Response(JSON.stringify(articles), {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     }, //เป็นการบอกว่าข้อมูลที่เราแปลงเป็น stringify มันเป็นข้อมูลแบบ Json
//   });
// };

import { findAll } from '@/features/articles/api';

export const GET = async () => {
  const articles = await findAll();
  return Response.json(articles);
};
