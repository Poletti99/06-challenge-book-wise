import { BookDetails } from '@/src/components/BookDetails';
import { Box } from '@/src/components/Box';
import * as Dialog from '@radix-ui/react-dialog';
import { BookRatingModal } from '../BookRatingModal';

export function Book() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Box>
          <BookDetails />
          <BookRatingModal />
        </Box>
      </Dialog.Trigger>
    </Dialog.Root>
  );
}
