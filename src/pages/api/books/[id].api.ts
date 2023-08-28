import { prisma } from '@/src/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const bookId = String(req.query.id);

  const prismaBook = await prisma.book.findUnique({
    where: {
      id: bookId,
    },

    select: {
      id: true,
      author: true,
      name: true,
      total_pages: true,
      cover_url: true,
      ratings: {
        select: {
          created_at: true,
          description: true,
          id: true,
          rate: true,
          user: {
            select: {
              avatar_url: true,
              name: true,
            },
          },
        },
      },
      categories: {
        select: {
          category: true,
        },
      },
    },
  });

  return res.json({ book: prismaBook });
}
