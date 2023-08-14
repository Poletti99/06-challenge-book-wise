import { Star } from 'phosphor-react';
import { StarsRatingContainer } from './styles';

export function StarsRating() {
  return (
    <StarsRatingContainer>
      <Star weight="fill" />
      <Star weight="fill" />
      <Star weight="fill" />
      <Star weight="fill" />
      <Star />
    </StarsRatingContainer>
  );
}
