import Hero from '@/src/assets/hero.png';
import Image from 'next/image';
import { StarsRating } from '../StarsRating';
import {
  BookReviewContainer,
  BookReviewContent,
  BookReviewDetails,
  ReviewHeader,
  UserImageContainer,
  UserInfo,
} from './styles';
import { Heading } from '@/src/components/Heading';
import { Text } from '@/src/components/Text';

interface BookReviewProps {
  user: {
    name: string;
    id: string;
    avatar_url: string;
  };
  book: {
    name: string;
    author: string;
    cover_url: string;
    id: string;
  };
  rating: {
    id: string;
    rate: number;
    description: string;
    created_at: string;
  };
}

export function BookReview({ user, book, rating }: BookReviewProps) {
  return (
    <BookReviewContainer>
      <ReviewHeader>
        <UserInfo>
          <UserImageContainer>
            <Image
              src={user?.avatar_url || ''}
              alt={user.name}
              width={40}
              height={40}
            />
          </UserImageContainer>
          <div>
            <p>{user.name}</p>
            <Text as="span">{rating.created_at}</Text>
          </div>
        </UserInfo>

        <StarsRating ratings={[{ id: rating.id, rate: rating.rate }]} />
      </ReviewHeader>

      <BookReviewContent>
        <Image
          src={book.cover_url.replace('public', '')}
          height={152}
          width={108}
          alt={book.name}
        />
        <BookReviewDetails>
          <div>
            <Heading>{book.name}</Heading>
            <Text as="span">{book.author}</Text>
          </div>

          <Text>{rating.description}</Text>
        </BookReviewDetails>
      </BookReviewContent>
    </BookReviewContainer>
  );
}
