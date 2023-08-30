import { styled } from '@/src/styles';

export const ExploreContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
});

export const ExploreBookList = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$5',
  maxWidth: 1080,
  marginTop: '3rem',
  overflowY: 'scroll',

  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const CategoriesList = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});
