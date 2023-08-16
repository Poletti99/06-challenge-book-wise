import { styled } from '@/src/styles';

export const ReadedBookList = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  maxWidth: 1080,
  flex: 1,
});

export const ProfileDetails = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$8',
  padding: '0 3.5rem',
  borderLeft: '1px solid $gray700',
  height: 'fit-content',

  '& > hr': {
    width: 32,
    height: 4,
    borderRadius: '$full',
    background: '$gradient-horizontal',
    border: 0,
  },
});

export const UserInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const UserImageContainer = styled('div', {
  background: '$gradient-vertical',
  padding: '2px',
  borderRadius: '$full',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  marginBottom: '$5',

  '& > img': {
    borderRadius: '$full',
    width: '4.5rem',
    height: '4.5rem',
  },
});

export const BooksAnalytics = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
});

export const AnalyticsItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  '> svg': {
    width: 32,
    height: 32,
    color: '$green100',
  },
});
