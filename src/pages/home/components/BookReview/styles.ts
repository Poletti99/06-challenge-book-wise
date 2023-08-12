import { styled } from '@/src/styles';

export const BookReviewContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',

  background: '$gray700',
  borderRadius: '$md',
  padding: '$6',
});

export const ReviewHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',

  '& > div:first-of-type': {},
});

export const BookReviewRating = styled('div', {
  display: 'flex',
  gap: '$1',

  '& > svg': {
    width: '$4',
    height: '$4',
    color: '$purple100',
  },
});

export const UserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  '& > div > p': {
    lineHeight: '$base',
  },
  '& > div > span': {
    lineHeight: '$base',
    fontSize: '$sm',
    color: '$gray400',
  },
});

export const UserImageContainer = styled('div', {
  background: '$gradient-vertical',
  padding: '2px',
  borderRadius: '$full',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > img': {
    borderRadius: '$full',
    width: '$10',
    height: '$10',
  },
});

export const BookReviewContent = styled('div', {
  display: 'flex',
  gap: '$5',

  img: {
    width: 108,
    height: 152,
    aspectRatio: '1 / 1',
    borderRadius: '$sm',
  },
});

export const BookReviewDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$5',
  height: 152,
  // overflow: 'hidden',

  '& > div': {
    h2: {
      fontSize: '$md',
      lineHeight: '$short',
    },
    span: {
      color: '$gray400',
      fontSize: '$sm',
      lineHeight: '$base',
    },
  },

  '& > p': {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',

    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 4,
    whiteSpace: 'pre-wrap',
  },
});
