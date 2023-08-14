import { styled } from '@/src/styles';

export const StarsRatingContainer = styled('div', {
  display: 'flex',
  gap: '$1',

  '& > svg': {
    width: '$4',
    height: '$4',
    color: '$purple100',
  },
});
