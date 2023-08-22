import { prisma } from '@/src/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { PAGE_SIZE } from '../constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const paginationCursorId = String(req.query.cursorId || '');

  let bookList = [];

  if (paginationCursorId) {
    bookList = await prisma.book.findMany({
      take: PAGE_SIZE,
      skip: 1,
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
    });
  } else {
    bookList = await prisma.book.findMany({
      take: PAGE_SIZE,
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
    });
  }

  let newPaginationCursorId = '';
  if (bookList.length > 0) {
    const lastBookInList = bookList.at(-1);
    newPaginationCursorId = String(lastBookInList?.id);
  }

  return res.json({ books: bookList, cursorId: newPaginationCursorId });
}
