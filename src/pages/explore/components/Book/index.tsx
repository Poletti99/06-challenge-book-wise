import { BookDetails } from '@/src/components/BookDetails';
import { Box } from '@/src/components/Box';
import * as Dialog from '@radix-ui/react-dialog';
import { BookRatingModal } from '../BookRatingModal';

import { Book as BookT } from '@/src/types';
import { forwardRef, useState } from 'react';

interface BookProps extends Omit<BookT, 'cover_url'> {
  coverURL: string;
}

export const Book = forwardRef<HTMLDivElement | null, BookProps>(
  ({ name, author, coverURL, ratings, id }, ref) => {
    const [openModal, setOpenModal] = useState(false);

    return (
      <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
        <Dialog.Trigger asChild>
          <Box ref={ref}>
            <BookDetails
              name={name}
              author={author}
              coverURL={coverURL}
              ratings={ratings}
            />
          </Box>
        </Dialog.Trigger>

        <BookRatingModal bookId={id} isOpen={openModal} />
      </Dialog.Root>
    );
  },
);
