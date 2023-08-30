import { Heading } from '@/src/components/Heading';
import { PageContainer } from '@/src/components/PageContainer';
import { api } from '@/src/lib/axios';
import { useState } from 'react';
import { Book } from './components/Book';
import { CategoriesList, ExploreBookList, ExploreContainer } from './styles';
import { BookT } from './types';
import { GetStaticProps } from 'next';
import { PageTitle } from '@/src/components/PageTitle';
import { Binoculars } from 'phosphor-react';
import { Tag } from '@/src/components/Tag';
import { prisma } from '@/src/lib/prisma';

type Category = {
  name: string;
  id: string;
};

interface GETBooksAxiosResponse {
  books: BookT[];
  cursorId: string;
  categories: Category[];
}

interface ExploreProps extends GETBooksAxiosResponse {}
export default function Explore({ books, cursorId, categories }: ExploreProps) {
  const [booksToExplore, setBooksToExplore] = useState<BookT[]>(books);
  const [currentCursorId, setCurrentCursorId] = useState(cursorId);

  return (
    <PageContainer>
      <ExploreContainer>
        <PageTitle>
          <Binoculars />
          Explorar
        </PageTitle>
        <CategoriesList>
          <Tag selected>Tudo</Tag>
          {categories.map((category) => (
            <Tag selected={false}>{category.name}</Tag>
          ))}
        </CategoriesList>
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

  const categories = await prisma.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  return {
    props: {
      books,
      cursorId,
      categories,
    },
  };
};
