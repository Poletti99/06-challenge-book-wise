import {
  BookReviewList,
  FeedContainer,
  HomeContainer,
  PopularBookList,
  PopularBooksContainer,
} from './styles';

import { SidebarMenu } from '@/src/components/SidebarMenu';
import { BookReview } from './components/BookReview';
import { PopularBook } from './components/PopularBook';

type ActiveTab = 'home' | 'explore';
export default function Home() {
  return (
    <HomeContainer>
      <SidebarMenu />

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
