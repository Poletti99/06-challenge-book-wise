import * as Dialog from '@radix-ui/react-dialog';
import {
  About,
  AboutItem,
  BookInfos,
  CloseButton,
  CommentList,
  Content,
  Overlay,
  RatingSection,
} from './styles';
import { BookOpen, BookmarkSimple, X } from 'phosphor-react';
import { Box } from '@/src/components/Box';
import { BookDetails } from '@/src/components/BookDetails';
import { Text } from '@/src/components/Text';
import { Heading } from '@/src/components/Heading';
import { Comment } from '../Comment';

export function BookRatingModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <BookInfos>
          <BookDetails size="xl" />

          <About>
            <AboutItem>
              <BookmarkSimple />
              <div>
                <Text>Categoria</Text>
                <Heading as="span">Computação, educação</Heading>
              </div>
            </AboutItem>
            <AboutItem>
              <BookOpen />
              <div>
                <Text>Páginas</Text>
                <Heading as="span">160</Heading>
              </div>
            </AboutItem>
          </About>
        </BookInfos>

        <RatingSection>
          <div>
            <Text>Avaliações</Text> <button>Avaliar</button>
          </div>
          <CommentList>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </CommentList>
        </RatingSection>
      </Content>
    </Dialog.Portal>
  );
}
