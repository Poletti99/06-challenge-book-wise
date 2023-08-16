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

export default function Profile() {
  return (
    <PageContainer>
      <ReadedBookList>
        <ReadedBook />
        <ReadedBook />
        <ReadedBook />
        <ReadedBook />
        <ReadedBook />
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
