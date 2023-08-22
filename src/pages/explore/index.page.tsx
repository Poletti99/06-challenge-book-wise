import { Heading } from '@/src/components/Heading';
import { PageContainer } from '@/src/components/PageContainer';
import { api } from '@/src/lib/axios';
import { useEffect, useState } from 'react';
import { Book } from './components/Book';
import { ExploreBookList, ExploreContainer } from './styles';
import { BookT } from './types';

interface GETBooksAxiosResponse {
  books: BookT[];
  cursorId: string;
}

export default function Explore() {
  const [booksToExplore, setBooksToExplore] = useState<BookT[]>([]);
  const [cursorId, setCursorId] = useState('');

  useEffect(() => {
    api
      .get<GETBooksAxiosResponse>('/books')
      .then(({ data }) => {
        setBooksToExplore(data.books);
        setCursorId(data.cursorId);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
