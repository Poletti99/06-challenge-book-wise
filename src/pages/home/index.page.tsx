import {
  BookReviewList,
  FeedContainer,
  PopularBookList,
  PopularBooksContainer,
} from './styles';

import { PageContainer } from '@/src/components/PageContainer';
import { BookReview } from './components/BookReview';
import { PopularBook } from './components/PopularBook';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import { prisma } from '@/src/lib/prisma';

type ActiveTab = 'home' | 'explore' | 'profile';
interface HomeProps {
  ratings: {
    id: string;
    rate: number;
    description: string;
    created_at: string;
    book: {
      name: string;
      author: string;
      cover_url: string;
      id: string;
    };
    user: {
      name: string;
      id: string;
      avatar_url: string;
    };
  }[];
}

export default function Home({ ratings }: HomeProps) {
  return (
    <PageContainer>
      <FeedContainer>
        <h2>Início</h2>
        <BookReviewList>
          {ratings.map(({ user, book, ...rating }) => (
            <BookReview
              key={rating.id}
              user={user}
              book={book}
              rating={rating}
            />
          ))}
        </BookReviewList>
      </FeedContainer>

      <PopularBooksContainer>
        <h2>Livros populares</h2>
        <PopularBookList>
          <PopularBook />
          <PopularBook />
          <PopularBook />
          <PopularBook />
        </PopularBookList>
      </PopularBooksContainer>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const ratings = await prisma.rating
    .findMany({
      take: 5,
      skip: 0,
      include: {
        book: {
          select: {
            name: true,
            author: true,
            cover_url: true,
            id: true,
          },
        },
        user: {
          select: {
            name: true,
            avatar_url: true,
            id: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    })
    .then((ratings) =>
      ratings.map((rating) => ({
        ...rating,
        created_at: rating.created_at.toISOString(),
      })),
    );

  return {
    props: {
      ratings,
    },
    revalidate: 60 * 60 * 24, //1 dia
  };
};
