import Hero from '@/src/assets/hero.png';
import Image from 'next/image';
import { Star } from 'phosphor-react';
import {
  BookReviewContainer,
  BookReviewContent,
  BookReviewDetails,
  BookReviewRating,
  ReviewHeader,
  UserImageContainer,
  UserInfo,
} from './styles';

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
            <span>Hoje</span>
          </div>
        </UserInfo>

        <BookReviewRating>
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star />
        </BookReviewRating>
      </ReviewHeader>

      <BookReviewContent>
        <Image src={Hero} height={152} width={108} alt="" />
        <BookReviewDetails>
          <div>
            <h2>O símbolo perdido</h2>
            <span>Dan Brown</span>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi totam
            repellat quaerat corporis corrupti deserunt id similique omnis, modi
            ipsum sequi quas asperiores ut quasi repellendus molestias debitis
            eius. Maxime! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nisi totam repellat quaerat corporis corrupti deserunt id
            similique omnis, modi ipsum sequi quas asperiores ut quasi
            repellendus molestias debitis eius. Maxime!
          </p>
        </BookReviewDetails>
      </BookReviewContent>
    </BookReviewContainer>
  );
}
