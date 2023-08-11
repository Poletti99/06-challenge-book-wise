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
