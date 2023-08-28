import { BookDetails } from '@/src/components/BookDetails';
import { Heading } from '@/src/components/Heading';
import { Text } from '@/src/components/Text';
import { UserImage } from '@/src/components/UserImage';
import { api } from '@/src/lib/axios';
import { StarsRating } from '@/src/pages/home/components/StarsRating';
import * as Dialog from '@radix-ui/react-dialog';
import { useSession } from 'next-auth/react';
import { BookOpen, BookmarkSimple, Check, X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Comment } from '../Comment';
import {
  About,
  AboutItem,
  BookInfos,
  CloseButton,
  CommentArea,
  CommentList,
  Content,
  NewComment,
  Overlay,
  RatingSection,
} from './styles';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

const newCommentFormSchema = z.object({
  comment: z.string().min(10, 'Você pode escrever mais, confio em ti').max(450),
  rate: z.number().min(0).max(5).step(0.5),
});

type NewCommentFormData = z.infer<typeof newCommentFormSchema>;

export function BookRatingModal({ bookId, isOpen }: BookRatginModalProps) {
  const [book, setBook] = useState<Book | null>(null);
  const [showNewComment, setShowNewComment] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCommentFormData>({
    resolver: zodResolver(newCommentFormSchema),
    defaultValues: {
      comment: '',
      rate: 0,
    },
  });

  const { data } = useSession();
  const user = data?.user;

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
    return bookCategory.map(({ category }) => category.name).join(', ');
  }

  function handleShowNewComment(show: boolean) {
    return () => {
      setShowNewComment(show);
    };
  }

  function handleInsertNewComment(data: NewCommentFormData) {
    console.log(data);
  }

  if (!book) {
    return null;
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
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
            <Text>Avaliações</Text>
            <button onClick={handleShowNewComment(true)}>Avaliar</button>
          </div>
          <CommentList>
            {showNewComment && (
              <NewComment
                as="form"
                onSubmit={handleSubmit(handleInsertNewComment)}
              >
                <header>
                  <div>
                    <UserImage src={user?.avatar_url || ''} />
                    <span>{user?.name}</span>
                  </div>
                  <StarsRating ratings={[]} />
                </header>
                <CommentArea
                  placeholder="Escreva sua avaliação"
                  {...register('comment')}
                />
                {errors.comment?.message}

                <div>
                  <button onClick={handleShowNewComment(false)}>
                    <X />
                  </button>
                  <button type="submit">
                    <Check />
                  </button>
                </div>
              </NewComment>
            )}
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
