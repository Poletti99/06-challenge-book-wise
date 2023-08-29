import { styled } from '@/src/styles';

export const ExploreContainer = styled('main', {});

export const ExploreBookList = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$5',
  maxWidth: 1080,
  margin: '3rem 0',
});

export const CategoriesList = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});
