import { Star, StarHalf } from 'phosphor-react';
import { StarsRatingContainer } from './styles';

interface StarsRatingProps {
  ratings: {
    id: string;
    rate: number;
  }[];
}
export function StarsRating({ ratings = [] }: StarsRatingProps) {
  function getRatingStars() {
    const bookRates = ratings.map((rating) => rating.rate);
    const ratingSum = bookRates.reduce((acc, curr) => acc + curr, 0);
    const ratingAverage = ratingSum / bookRates.length;
    const ratingFloor = Math.floor(ratingAverage);
    const ratingRest = ratingAverage - ratingFloor;
    return Array.from({ length: 5 })
      .fill('')
      .map((_, index) => {
        if (index + 1 <= ratingFloor) {
          return <Star key={index} weight="fill" />;
        }

        if (ratingRest > 0.75 && index === ratingFloor) {
          return <Star key={index} weight="fill" />;
        }

        if (ratingRest > 0.25 && index === ratingFloor) {
          return <StarHalf key={index} weight="fill" />;
        }

        return <Star key={index} />;
      });
  }
  return <StarsRatingContainer>{getRatingStars()}</StarsRatingContainer>;
}
