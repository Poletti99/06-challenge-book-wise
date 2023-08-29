import { prisma } from '@/src/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { PAGE_SIZE } from '../constants';
import { Prisma } from '@prisma/client';
import { z } from 'zod';
import { getServerSession } from 'next-auth';
import { buildNextAuthOptions } from '../auth/[...nextauth].api';

const newRatingBodySchema = z.object({
  rating: z.string().min(10).max(450),
  rate: z.number().min(0).max(5).step(0.5),
  bookId: z.string(),
  userId: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const session = await getServerSession(req, res, buildNextAuthOptions());

  if (!session) {
    return res.status(401).end();
  }

  const { rating, rate, bookId, userId } = newRatingBodySchema.parse(req.body);

  const prismaRating = await prisma.rating.create({
    data: {
      description: rating,
      rate,
      book_id: bookId,
      user_id: userId,
    },
    include: {
      user: true,
      book: true,
    },
  });

  return res.status(201).json({ rating: prismaRating });
}
