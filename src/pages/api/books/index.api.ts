import { prisma } from '@/src/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { PAGE_SIZE } from '../constants';
import { Prisma } from '@prisma/client';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const bookCategory = String(req.query.category || '');
  const paginationCursorId = String(req.query.cursorId || '');

  const prismaOptions: Prisma.BookFindManyArgs = {
    where: {
      categories: {
        some: {
          category: {
            name: bookCategory || undefined,
          },
        },
      },
    },
    take: PAGE_SIZE + 5,
    skip: paginationCursorId ? 1 : 0,
    cursor: {
      id: paginationCursorId,
    },
    orderBy: {
      id: 'desc',
    },

    include: {
      ratings: {
        select: {
          id: true,
          rate: true,
        },
      },
    },
  };

  if (!paginationCursorId) {
    Reflect.deleteProperty(prismaOptions, 'cursor');
  }

  const bookList = await prisma.book.findMany({ ...prismaOptions });

  let newPaginationCursorId = '';
  if (bookList.length > 0) {
    const lastBookInList = bookList.at(-1);
    newPaginationCursorId = String(lastBookInList?.id);
  }

  return res.json({
    books: bookList,
    cursorId: newPaginationCursorId || paginationCursorId,
  });
}
