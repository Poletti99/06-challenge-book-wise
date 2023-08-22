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
    console.log(ratings);
    const ratingSum = bookRates.reduce((acc, curr) => acc + curr, 0);
    const ratingAverage = ratingSum / bookRates.length;
    const ratingFloor = Math.floor(ratingAverage);
    const ratingRest = ratingAverage - ratingFloor;
    return Array.from({ length: 5 })
      .fill('')
      .map((_, index) => {
        if (index + 1 <= ratingFloor) {
          return <Star weight="fill" />;
        }

        if (ratingRest > 0.75 && index === ratingFloor) {
          return <Star weight="fill" />;
        }

        if (ratingRest > 0.25 && index === ratingFloor) {
          return <StarHalf weight="fill" />;
        }

        return <Star />;
      });
  }
  return <StarsRatingContainer>{getRatingStars()}</StarsRatingContainer>;
}
