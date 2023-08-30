import { Heading } from '@/src/components/Heading';
import { PageContainer } from '@/src/components/PageContainer';
import { api } from '@/src/lib/axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Book } from './components/Book';
import { CategoriesList, ExploreBookList, ExploreContainer } from './styles';

import { GetStaticProps } from 'next';
import { PageTitle } from '@/src/components/PageTitle';
import { Binoculars } from 'phosphor-react';
import { Tag } from '@/src/components/Tag';
import { prisma } from '@/src/lib/prisma';
import { GETBooksAxiosResponse, getBooks } from '../requests/books';
import { Book as BookT } from '@/src/types';

type Category = {
  name: string;
  id: string;
};

interface ExploreProps extends GETBooksAxiosResponse {
  categories: Category[];
}

let observer: IntersectionObserver;
let firstLoading = true;
export default function Explore({ books, cursorId, categories }: ExploreProps) {
  const [booksToExplore, setBooksToExplore] = useState<BookT[]>(books);
  const [currentCursorId, setCurrentCursorId] = useState(cursorId);
  const [usedCursorIds, setUsedCursorIds] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState('all');

  const ref = useRef<HTMLInputElement>(null);

  const isCursorIdUsed = useCallback(
    (cursorId: string) => {
      return usedCursorIds.includes(cursorId);
    },
    [usedCursorIds],
  );

  async function getMoreRatings(currentCursorId: string, category = '') {
    setUsedCursorIds((state) => [...state, currentCursorId]);
    const currentCategory = category === 'all' ? '' : category;
    const { books, cursorId } = await getBooks(
      currentCursorId,
      currentCategory,
    );
    setBooksToExplore((state) => [...state, ...books]);
    setCurrentCursorId(cursorId);
  }

  useEffect(() => {
    observer?.disconnect();
    observer = new IntersectionObserver(
      (entities) => {
        const target = entities[0];
        if (
          target.isIntersecting &&
          !isCursorIdUsed(currentCursorId) &&
          booksToExplore.length % 15 == 0
        ) {
          getMoreRatings(currentCursorId, currentCategory);
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
  }, [ref, currentCursorId, isCursorIdUsed, currentCategory, booksToExplore]);

  function handleChangeCurrentCategory(category: string) {
    return () => {
      setCurrentCategory(category);
      setCurrentCursorId('');
      setUsedCursorIds([]);
      setBooksToExplore([]);
      getMoreRatings('', category);
    };
  }

  return (
    <PageContainer>
      <ExploreContainer>
        <PageTitle>
          <Binoculars />
          Explorar
        </PageTitle>
        <CategoriesList>
          <Tag
            selected={currentCategory === 'all'}
            onClick={handleChangeCurrentCategory('all')}
          >
            Tudo
          </Tag>
          {categories.map((category) => (
            <Tag
              key={category.id}
              selected={currentCategory === category.name}
              onClick={handleChangeCurrentCategory(category.name)}
            >
              {category.name}
            </Tag>
          ))}
        </CategoriesList>
        <ExploreBookList>
          {booksToExplore.map(
            ({ name, author, cover_url, id, ratings }, index, list) => (
              <Book
                key={id}
                id={id}
                name={name}
                author={author}
                coverURL={cover_url}
                ratings={ratings}
                ref={index + 1 === list.length ? ref : null}
              />
            ),
          )}
        </ExploreBookList>
      </ExploreContainer>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { books, cursorId } = await getBooks();

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
