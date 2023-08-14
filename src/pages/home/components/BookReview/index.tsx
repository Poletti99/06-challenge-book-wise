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

export function BookReview() {
  return (
    <BookReviewContainer>
      <ReviewHeader>
        <UserInfo>
          <UserImageContainer>
            <Image src={Hero} alt="" width={40} height={40} />
          </UserImageContainer>
          <div>
            <p>Victor Poletti</p>
            <Text as="span">Hoje</Text>
          </div>
        </UserInfo>

        <StarsRating />
      </ReviewHeader>

      <BookReviewContent>
        <Image src={Hero} height={152} width={108} alt="" />
        <BookReviewDetails>
          <div>
            <Heading>O símbolo perdido</Heading>
            <Text as="span">Dan Brown</Text>
          </div>

          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi totam
            repellat quaerat corporis corrupti deserunt id similique omnis, modi
            ipsum sequi quas asperiores ut quasi repellendus molestias debitis
            eius. Maxime! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nisi totam repellat quaerat corporis corrupti deserunt id
            similique omnis, modi ipsum sequi quas asperiores ut quasi
            repellendus molestias debitis eius. Maxime!
          </Text>
        </BookReviewDetails>
      </BookReviewContent>
    </BookReviewContainer>
  );
}
