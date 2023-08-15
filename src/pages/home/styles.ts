import { styled } from '@/src/styles';

export const HomeContainer = styled('div', {
  display: 'flex',
  height: '100vh',
  padding: '$5',
});

export const FeedContainer = styled('main', {
  flex: 1,
  maxWidth: 1080,
  margin: '0 4rem 0 6rem',
});

export const BookReviewList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxHeight: '100%',

  overflowY: 'scroll',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const PopularBooksContainer = styled('aside', {});

export const PopularBookList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
});
