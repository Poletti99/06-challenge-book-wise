import Logo from '@/src/assets/hero.png';
import { Heading } from '@/src/components/Heading';
import { PageContainer } from '@/src/components/PageContainer';
import { PageTitle } from '@/src/components/PageTitle';
import { Text } from '@/src/components/Text';
import { api } from '@/src/lib/axios';
import { prisma } from '@/src/lib/prisma';
import { Rating } from '@/src/types';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import {
  BookOpen,
  BookmarkSimple,
  Books,
  User,
  UserList,
} from 'phosphor-react';
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api';
import { ReadedBook } from './components/ReadedBook';
import {
  AnalyticsItem,
  BooksAnalytics,
  ProfileDetails,
  ReadedBookList,
  UserImageContainer,
  UserInfos,
} from './styles';
import { UserImage } from '@/src/components/UserImage';

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
}

export default function Profile({
  ratings,
  user,
  userAnalytics,
}: ProfileProps) {
  return (
    <PageContainer>
      <ReadedBookList>
        <PageTitle>
          <User />
          Perfil
        </PageTitle>
        {ratings.map(({ book, ...rating }) => (
          <ReadedBook
            key={rating.id}
            author={book.author}
            cover_url={book.cover_url}
            name={book.name}
            createdAt={rating.created_at}
            ratingDescription={rating.description}
            ratings={[{ id: rating.id, rate: rating.rate }]}
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
interface RatingsData {
  ratings: {
    id: string;
    rate: number;
    description: string;
    created_at: string;
    book_id: string;
    user_id: string;
    book: RatingBook;

    user: {
      name: string;
      avatar_url: string;
      id: string;
      created_at: string;
    };
  }[];
}

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
  const { data } = await api.get<RatingsData>('/ratings', {
    params: {
      userId,
    },
  });

  const { ratings } = data;

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
    },
  };
};
