import { BookDetails } from '@/src/components/BookDetails';
import { Box } from '@/src/components/Box';
import * as Dialog from '@radix-ui/react-dialog';
import { BookRatingModal } from '../BookRatingModal';
import { BookT } from '../../types';

interface BookProps extends Omit<BookT, 'cover_url'> {
  coverURL: string;
}

export function Book({ name, author, coverURL, ratings }: BookProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Box>
          <BookDetails
            name={name}
            author={author}
            coverURL={coverURL}
            ratings={ratings}
          />
          <BookRatingModal />
        </Box>
      </Dialog.Trigger>
    </Dialog.Root>
  );
}
