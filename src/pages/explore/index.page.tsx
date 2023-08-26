import { Heading } from '@/src/components/Heading';
import { PageContainer } from '@/src/components/PageContainer';
import { api } from '@/src/lib/axios';
import { useState } from 'react';
import { Book } from './components/Book';
import { ExploreBookList, ExploreContainer } from './styles';
import { BookT } from './types';
import { GetStaticProps } from 'next';

interface GETBooksAxiosResponse {
  books: BookT[];
  cursorId: string;
}

interface ExploreProps extends GETBooksAxiosResponse {}
export default function Explore({ books, cursorId }: ExploreProps) {
  const [booksToExplore, setBooksToExplore] = useState<BookT[]>(books);
  const [currentCursorId, setCurrentCursorId] = useState(cursorId);

  return (
    <PageContainer>
      <ExploreContainer>
        <Heading>Explorar</Heading>

        <ExploreBookList>
          {booksToExplore.map(({ name, author, cover_url, id, ratings }) => (
            <Book
              key={id}
              id={id}
              name={name}
              author={author}
              coverURL={cover_url}
              ratings={ratings}
            />
          ))}
        </ExploreBookList>
      </ExploreContainer>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { books, cursorId },
  } = await api.get<GETBooksAxiosResponse>('/books');

  return {
    props: {
      books,
      cursorId,
    },
  };
};
