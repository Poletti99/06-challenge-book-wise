import {
  BookReviewList,
  FeedContainer,
  PopularBookList,
  PopularBooksContainer,
} from './styles';

import { PageContainer } from '@/src/components/PageContainer';
import { PageTitle } from '@/src/components/PageTitle';
import { prisma } from '@/src/lib/prisma';
import { Book, Rating } from '@/src/types';
import { GetStaticProps } from 'next';
import { ChartLineUp } from 'phosphor-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getRatings } from '../requests/ratings';
import { BookReview } from './components/BookReview';
import { PopularBook } from './components/PopularBook';

export interface PopularBooks extends Book {
  ratings: { id: string; rate: number }[];
}
interface HomeProps {
  ratings: Rating[];
  popularBooks: PopularBooks[];
  cursorId: string;
}

let observer: IntersectionObserver;
export default function Home({ ratings, popularBooks, cursorId }: HomeProps) {
  const [ratingsList, setRatingsList] = useState(ratings);
  const [currentCursorId, setCurrentCursorId] = useState(cursorId);
  const [usedCursorIds, setUsedCursorIds] = useState<string[]>([]);

  const ref = useRef<HTMLInputElement>(null);

  const isCursorIdUsed = useCallback(
    (cursorId: string) => {
      return usedCursorIds.includes(cursorId);
    },
    [usedCursorIds],
  );

  async function getMoreRatings(currentCursorId: string) {
    setUsedCursorIds((state) => [...state, currentCursorId]);
    const { ratings, cursorId } = await getRatings(currentCursorId);
    setRatingsList((state) => [...state, ...ratings]);
    setCurrentCursorId(cursorId);
  }

  useEffect(() => {
    observer?.disconnect();
    observer = new IntersectionObserver(
      (entities) => {
        const target = entities[0];
        if (target.isIntersecting && !isCursorIdUsed(currentCursorId)) {
          getMoreRatings(currentCursorId);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, currentCursorId, isCursorIdUsed]);

  return (
    <PageContainer>
      <FeedContainer>
        <PageTitle>
          <ChartLineUp />
          Início
        </PageTitle>

        <BookReviewList>
          {ratingsList.map(({ user, book, ...rating }, index, list) => (
            <BookReview
              key={rating.id}
              user={user}
              book={book}
              rating={rating}
              ref={index + 1 === list.length ? ref : null}
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
  const { ratings, cursorId } = await getRatings('');

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
      ratings,
      popularBooks,
      cursorId,
    },
    revalidate: 60 * 60 * 1, //1 hora
  };
};
