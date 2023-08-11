import {
  BookReviewList,
  FeedContainer,
  HomeContainer,
  MenuContainer,
  MenuItem,
  MenuLoginButton,
  PopularBooksContainer,
} from './styles';

import Logo from '@/src/assets/logo-small.svg';
import Image from 'next/image';
import { Binoculars, ChartLineUp, SignIn } from 'phosphor-react';
import { BookReview } from './components/BookReview';

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
        </BookReviewList>
      </FeedContainer>

      <PopularBooksContainer>
        <h2>Livros populares</h2>
      </PopularBooksContainer>
    </HomeContainer>
  );
}
