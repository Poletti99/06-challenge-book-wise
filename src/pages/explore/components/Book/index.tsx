import { BookDetails } from '@/src/components/BookDetails';
import { Box } from '@/src/components/Box';
import * as Dialog from '@radix-ui/react-dialog';
import { BookRatingModal } from '../BookRatingModal';
import { BookT } from '../../types';
import { useState } from 'react';

interface BookProps extends Omit<BookT, 'cover_url'> {
  coverURL: string;
}

export function Book({ name, author, coverURL, ratings, id }: BookProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
      <Dialog.Trigger asChild>
        <Box>
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
}
