import Hero from '@/src/assets/hero.png';
import {
  BookReviewList,
  FeedContainer,
  HomeContainer,
  MenuContainer,
  MenuItem,
  MenuLoginButton,
  PopularBooksContainer,
  PopularBookList,
} from './styles';

import Logo from '@/src/assets/logo-small.svg';
import Image from 'next/image';
import { Binoculars, ChartLineUp, SignIn } from 'phosphor-react';
import { BookReview } from './components/BookReview';
import { Text } from '@/src/components/Text';
import { PopularBook } from './components/PopularBook';

type ActiveTab = 'home' | 'explore';
export default function Home() {
  return (
    <HomeContainer>
      <MenuContainer>
        <div>
          <Image src={Logo} alt="" />
          <nav>
            <MenuItem href="/home" active>
              <ChartLineUp /> Início
            </MenuItem>

            <MenuItem href="/home" active={false}>
              <Binoculars /> Explorar
            </MenuItem>
          </nav>
        </div>

        <footer>
          <MenuLoginButton href="/">
            Fazer Login <SignIn />
          </MenuLoginButton>
        </footer>
      </MenuContainer>

      <FeedContainer>
        <h2>Início</h2>
        <BookReviewList>
          <BookReview />
          <BookReview />
          <BookReview />
          <BookReview />
        </BookReviewList>
      </FeedContainer>

      <PopularBooksContainer>
        <h2>Livros populares</h2>
        <PopularBookList>
          <PopularBook />
          <PopularBook />
          <PopularBook />
          <PopularBook />
        </PopularBookList>
      </PopularBooksContainer>
    </HomeContainer>
  );
}
