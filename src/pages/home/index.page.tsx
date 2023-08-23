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
import { GetServerSideProps, GetStaticProps } from 'next';
import { prisma } from '@/src/lib/prisma';
import { api } from '@/src/lib/axios';

type ActiveTab = 'home' | 'explore' | 'profile';
type Book = {
  name: string;
  author: string;
  cover_url: string;
  id: string;
};

type Rating = {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  book: Book;
  user: {
    name: string;
    id: string;
    avatar_url: string;
  };
};

export interface PopularBooks extends Book {
  ratings: { id: string; rate: number }[];
}
interface HomeProps {
  ratings: Rating[];
  popularBooks: PopularBooks[];
}

export default function Home({ ratings, popularBooks }: HomeProps) {
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
          {popularBooks.map(({ ratings, ...book }) => (
            <PopularBook
              key={book.id}
              name={book.name}
              author={book.author}
              cover_url={book.cover_url}
              ratings={ratings}
            />
          ))}
        </PopularBookList>
      </PopularBooksContainer>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const { data } = await api.get<{ ratings: Rating[] }>('/ratings');

  const popularBooks = await prisma.book.findMany({
    take: 4,
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
      ratings: {
        select: {
          rate: true,
          id: true,
        },
      },
    },
  });

  return {
    props: {
      ratings: data.ratings,
      popularBooks,
    },
    revalidate: 60 * 60 * 24, //1 dia
  };
};
