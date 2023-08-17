import { Heading } from '@/src/components/Heading';
import { PageContainer } from '@/src/components/PageContainer';
import { Book } from './components/Book';
import { ExploreBookList, ExploreContainer } from './styles';
import { Tag } from '@/src/components/Tag';

export default function Explore() {
  return (
    <PageContainer>
      <ExploreContainer>
        <Heading>Explorar</Heading>

        <ExploreBookList>
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </ExploreBookList>
      </ExploreContainer>
    </PageContainer>
  );
}
