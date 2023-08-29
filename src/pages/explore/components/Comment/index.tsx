import { StarsRating } from '@/src/pages/home/components/StarsRating';
import { CommentContainer, CommentHeader, CommentText } from './styles';
import Image from 'next/image';
import Hero from '@/src/assets/hero.png';
import { Heading } from '@/src/components/Heading';
import { Text } from '@/src/components/Text';
import { UserImage } from '@/src/components/UserImage';
import { Rating } from '@/src/types';

interface CommentProps {
  user: {
    name: string;
    avatar_url: string;
  };
  createdAt: string;
  rate: number;
  comment: string;
}
export function Comment({ comment, createdAt, rate, user }: CommentProps) {
  return (
    <CommentContainer>
      <CommentHeader>
        <div>
          <UserImage src={user?.avatar_url || ''} />

          <div>
            <Heading>{user.name}</Heading>
            <Text>{createdAt}</Text>
          </div>
        </div>
        <StarsRating ratings={[{ id: '', rate }]} />
      </CommentHeader>
      <CommentText>{comment}</CommentText>
    </CommentContainer>
  );
}
