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
import { useEffect, useState } from 'react';
import { api } from '@/src/lib/axios';

interface BookRatginModalProps {
  bookId: string;
  isOpen: boolean;
}

type Categories = {
  category: {
    id: string;
    name: string;
  };
}[];

type Book = {
  id: string;
  author: string;
  name: string;
  total_pages: number;
  cover_url: string;
  ratings: {
    created_at: string;
    description: string;
    id: string;
    rate: number;
    user: {
      avatar_url: string;
      name: string;
    };
  }[];
  categories: Categories;
};

export function BookRatingModal({ bookId, isOpen }: BookRatginModalProps) {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    async function getBook() {
      const { data } = await api.get(`/books/${bookId}`);
      setBook(data.book);
    }

    if (isOpen) {
      getBook();
    }
  }, [bookId, isOpen]);

  function getCategoriesText(bookCategory: Categories) {
    console.log(bookCategory);
    return bookCategory.map(({ category }) => category.name).join(', ');
  }

  if (!book) {
    return null;
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <CloseButton>
        <X size={24} />
      </CloseButton>
      <Content>
        <BookInfos>
          <BookDetails
            size="xl"
            author={book.author}
            coverURL={book.cover_url}
            name={book.name}
            ratings={book.ratings}
          />

          <About>
            <AboutItem>
              <BookmarkSimple />
              <div>
                <Text>Categoria</Text>
                <Heading as="span">
                  {getCategoriesText(book.categories)}
                </Heading>
              </div>
            </AboutItem>
            <AboutItem>
              <BookOpen />
              <div>
                <Text>Páginas</Text>
                <Heading as="span">{book.total_pages}</Heading>
              </div>
            </AboutItem>
          </About>
        </BookInfos>

        <RatingSection>
          <div>
            <Text>Avaliações</Text> <button>Avaliar</button>
          </div>
          <CommentList>
            {book.ratings.map((rating) => (
              <Comment
                key={rating.id}
                user={rating.user}
                rate={rating.rate}
                comment={rating.description}
                createdAt={rating.created_at}
              />
            ))}
          </CommentList>
        </RatingSection>
      </Content>
    </Dialog.Portal>
  );
}
