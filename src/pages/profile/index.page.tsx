import { Heading } from '@/src/components/Heading';
import { PageContainer } from '@/src/components/PageContainer';
import { PageTitle } from '@/src/components/PageTitle';
import { Text } from '@/src/components/Text';
import { UserImage } from '@/src/components/UserImage';
import { prisma } from '@/src/lib/prisma';
import { Rating } from '@/src/types';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import {
  BookOpen,
  BookmarkSimple,
  Books,
  User,
  UserList,
} from 'phosphor-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api';
import { getRatings } from '../requests/ratings';
import { ReadedBook } from './components/ReadedBook';
import {
  AnalyticsItem,
  BooksAnalytics,
  ProfileDetails,
  ReadedBookList,
  UserImageContainer,
  UserInfos,
} from './styles';

type UserAnalytics = {
  totalReadedPages: number;
  ratedBooks: number;
  readedAuthors: number;
  mostReadedCategory: string;
};

interface ProfileProps {
  ratings: Rating[];
  user: { name: string; id: string; created_at: string; avatar_url: string };
  userAnalytics: UserAnalytics;
  cursorId: string;
}

let observer: IntersectionObserver;
export default function Profile({
  ratings,
  user,
  userAnalytics,
  cursorId,
}: ProfileProps) {
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
    const { ratings, cursorId } = await getRatings(currentCursorId, user.id);
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
      <ReadedBookList>
        <PageTitle>
          <User />
          Perfil
        </PageTitle>
        {ratingsList.map(({ book, ...rating }, index, list) => (
          <ReadedBook
            key={rating.id}
            author={book.author}
            cover_url={book.cover_url}
            name={book.name}
            createdAt={rating.created_at}
            ratingDescription={rating.description}
            ratings={[{ id: rating.id, rate: rating.rate }]}
            ref={index + 1 === list.length ? ref : null}
          />
        ))}
      </ReadedBookList>
      <ProfileDetails>
        <UserInfos>
          <UserImageContainer>
            <UserImage size="lg" src={user?.avatar_url || ''} />
          </UserImageContainer>
          <Heading size="xl">{user.name}</Heading>
          <Text as="span">
            membro desde
            {` ${new Date(user.created_at).getFullYear()}`}
          </Text>
        </UserInfos>
        <hr />
        <BooksAnalytics>
          <AnalyticsItem>
            <BookOpen />
            <div>
              <Heading>{userAnalytics.totalReadedPages}</Heading>
              <Text>Páginas lidas</Text>
            </div>
          </AnalyticsItem>

          <AnalyticsItem>
            <Books />
            <div>
              <Heading>{userAnalytics.ratedBooks}</Heading>
              <Text>Livros avaliados</Text>
            </div>
          </AnalyticsItem>
          <AnalyticsItem>
            <UserList />
            <div>
              <Heading>{userAnalytics.readedAuthors}</Heading>
              <Text>Autores lidos</Text>
            </div>
          </AnalyticsItem>
          <AnalyticsItem>
            <BookmarkSimple />
            <div>
              <Heading>{userAnalytics.mostReadedCategory}</Heading>
              <Text>Categoria mais lida</Text>
            </div>
          </AnalyticsItem>
        </BooksAnalytics>
      </ProfileDetails>
    </PageContainer>
  );
}

type RatingBook = {
  name: string;
  author: string;
  cover_url: string;
  id: string;
  total_pages: number;
  categories: {
    category: { name: string };
  }[];
};

interface ReadedBook {
  [id: string]: RatingBook;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, buildNextAuthOptions());

  const userId = session?.user.id;
  if (!userId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
        statusCode: 401,
      },
    };
  }
  const { ratings, cursorId } = await getRatings('', userId);

  const user = await prisma.user
    .findUnique({
      where: {
        id: userId,
      },
    })
    .then((data) => ({ ...data, created_at: data?.created_at.toISOString() }));

  const uniqueReadedBooks: ReadedBook = ratings.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.book_id]: curr.book,
    };
  }, {});

  const userAnalytics = Object.values(uniqueReadedBooks).reduce<UserAnalytics>(
    (acc, curr) => {
      return {
        totalReadedPages: acc.totalReadedPages + curr.total_pages,
        ratedBooks: acc.ratedBooks + 1,
        readedAuthors: acc.readedAuthors + 1,
        mostReadedCategory: '',
      };
    },
    {
      totalReadedPages: 0,
      ratedBooks: 0,
      readedAuthors: 0,
      mostReadedCategory: '',
    },
  );

  const readedCategories = Object.values(uniqueReadedBooks).flatMap(
    ({ categories }) => categories.map((category) => category.category.name),
  );

  const categoriesCount = readedCategories.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: Number(acc[curr as keyof typeof acc] + 1 || 1),
    };
  }, {});

  const categoriesValues: number[] = Object.values(categoriesCount);

  const mostReadedCategoryValue = Math.max(...categoriesValues);

  const mostReadedCategoryName = Object.entries(categoriesCount).find(
    (category) => category[1] === mostReadedCategoryValue,
  )?.[0];

  userAnalytics.mostReadedCategory = mostReadedCategoryName || '';

  return {
    props: {
      ratings: ratings,
      user,
      userAnalytics,
      cursorId,
    },
  };
};
