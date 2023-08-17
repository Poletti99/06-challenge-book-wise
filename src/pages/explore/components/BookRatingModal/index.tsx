import * as Dialog from '@radix-ui/react-dialog';
import { About, AboutItem, CloseButton, Content, Overlay } from './styles';
import { BookOpen, BookmarkSimple, X } from 'phosphor-react';
import { Box } from '@/src/components/Box';
import { BookDetails } from '@/src/components/BookDetails';
import { Text } from '@/src/components/Text';
import { Heading } from '@/src/components/Heading';

export function BookRatingModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Box>
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
        </Box>
      </Content>
    </Dialog.Portal>
  );
}
