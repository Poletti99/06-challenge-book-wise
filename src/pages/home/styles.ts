import { styled } from '@/src/styles';
import Link from 'next/link';
import { BookReview } from './components/BookReview';

export const HomeContainer = styled('div', {
  display: 'flex',
  height: '100vh',
  padding: '$5',
});

export const MenuContainer = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: 232,
  background: '$gray700',
  borderRadius: '$lg',
  padding: '$10 0 $6',

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4rem',
  },

  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$4',
  },
});

const BaseItem = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  textDecoration: 'none',
  fontSize: '$md',
  padding: '$2 0',

  '& > svg': {
    width: 24,
    height: 24,
  },
});

export const MenuItem = styled(BaseItem, {
  position: 'relative',
  width: '100%',
  lineHeight: '$base',

  variants: {
    active: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',
        '&::before': {
          content: '',
          position: 'absolute',
          height: '$6',
          width: 4,
          background: '$gradient-vertical',
          borderRadius: '$full',
          left: '-$5',
        },
      },
      false: {
        color: '$gray400',
      },
    },
  },
});

export const MenuLoginButton = styled(BaseItem, {
  color: '$gray200',
  fontWeight: '$bold',
  lineHeight: '$short',

  '& > svg': {
    color: '$green100',
  },
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
