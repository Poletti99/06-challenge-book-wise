import { styled } from '@/src/styles';

export const PopularBookContainer = styled('div', {
  display: 'flex',
  gap: '$5',
  padding: '$4 $5',

  background: '$gray700',
  borderRadius: '$md',

  '> img': {
    borderRadius: '$sm',
  },
});

export const PopularBookInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
