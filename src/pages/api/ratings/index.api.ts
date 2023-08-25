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

  const userId = String(req.query.userId || '');
  const paginationCursorId = String(req.query.cursorId || '');
  const prismaOptions: Prisma.RatingFindManyArgs = {
    take: PAGE_SIZE,
    skip: paginationCursorId ? 1 : 0,
    cursor: {
      id: paginationCursorId,
    },
    where: {
      user_id: userId || undefined,
    },
    include: {
      book: {
        select: {
          name: true,
          author: true,
          cover_url: true,
          id: true,
          total_pages: true,

          categories: {
            select: {
              category: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },

      user: {
        select: {
          name: true,
          avatar_url: true,
          id: true,
          created_at: true,
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  };

  if (!paginationCursorId) {
    Reflect.deleteProperty(prismaOptions, 'cursor');
  }

  const ratings = await prisma.rating
    .findMany({ ...prismaOptions })
    .then((ratings) =>
      ratings.map((rating) => ({
        ...rating,
        created_at: rating.created_at.toISOString(),
      })),
    );

  let newPaginationCursorId = '';
  if (ratings.length > 0) {
    const lastBookInList = ratings.at(-1);
    newPaginationCursorId = String(lastBookInList?.id);
  }

  return res.json({ ratings, cursorId: newPaginationCursorId });
}
