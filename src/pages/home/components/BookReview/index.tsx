import Hero from '@/src/assets/hero.png';
import Image from 'next/image';
import { Star } from 'phosphor-react';
import {
  BookReviewContainer,
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

        <div>
          <Star weight="fill" />
          <Star weight="fill" />
          <Star />
          <Star />
          <Star />
        </div>
      </ReviewHeader>

      <div>
        <h2>aoba</h2>
      </div>
    </BookReviewContainer>
  );
}
