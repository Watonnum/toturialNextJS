import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === 'development' ///ระบุให้เราทราบว่า เรารัน node แบบไหน developement | production
      ? ['query', 'error', 'warn']
      : ['error'],
});
export default prisma;
