import { StarsRating } from '@/src/pages/home/components/StarsRating';
import { CommentContainer, CommentHeader, CommentText } from './styles';
import Image from 'next/image';
import Hero from '@/src/assets/hero.png';
import { Heading } from '@/src/components/Heading';
import { Text } from '@/src/components/Text';
import { UserImage } from '@/src/components/UserImage';

export function Comment() {
  return (
    <CommentContainer>
      <CommentHeader>
        <div>
          <UserImage />

          <div>
            <Heading>Victor Poletti</Heading>
            <Text>Há 2 dias</Text>
          </div>
        </div>
        <StarsRating />
      </CommentHeader>
      <CommentText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur,
        deleniti possimus? Quasi iure ad ea enim incidunt, modi perspiciatis eum
        delectus dolorum pariatur autem! Esse magnam perferendis repellat
        tenetur delectus.
      </CommentText>
    </CommentContainer>
  );
}
