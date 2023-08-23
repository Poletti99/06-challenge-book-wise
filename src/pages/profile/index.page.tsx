import { PageContainer } from '@/src/components/PageContainer';
import { ReadedBook } from './components/ReadedBook';
import {
  AnalyticsItem,
  BooksAnalytics,
  ProfileDetails,
  ReadedBookList,
  UserImageContainer,
  UserInfos,
} from './styles';
import Image from 'next/image';
import Logo from '@/src/assets/hero.png';
import { Heading } from '@/src/components/Heading';
import { Text } from '@/src/components/Text';
import {
  Book,
  BookOpen,
  Bookmark,
  BookmarkSimple,
  Books,
  UserList,
} from 'phosphor-react';
import { GetServerSideProps, GetStaticProps } from 'next';
import { Rating } from '@/src/types';
import { api } from '@/src/lib/axios';

interface ProfileProps {
  ratings: Rating[];
}

export default function Profile({ ratings }: ProfileProps) {
  return (
    <PageContainer>
      <ReadedBookList>
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
            <Image src={Logo} width={72} height={72} alt="" />
          </UserImageContainer>
          <Heading size="xl">Victor Poletti</Heading>
          <Text as="span">membro desde 2023</Text>
        </UserInfos>
        <hr />
        <BooksAnalytics>
          <AnalyticsItem>
            <BookOpen />
            <div>
              <Heading>380</Heading>
              <Text>Páginas lidas</Text>
            </div>
          </AnalyticsItem>

          <AnalyticsItem>
            <Books />
            <div>
              <Heading>10</Heading>
              <Text>Livros avaliados</Text>
            </div>
          </AnalyticsItem>
          <AnalyticsItem>
            <UserList />
            <div>
              <Heading>8</Heading>
              <Text>Autores lidos</Text>
            </div>
          </AnalyticsItem>
          <AnalyticsItem>
            <BookmarkSimple />
            <div>
              <Heading>Computação</Heading>
              <Text>Categoria mais lida</Text>
            </div>
          </AnalyticsItem>
        </BooksAnalytics>
      </ProfileDetails>
    </PageContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<{ ratings: Rating[] }>('/ratings', {
    params: {
      userId: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
    },
  });

  return {
    props: {
      ratings: data.ratings,
    },
  };
};
