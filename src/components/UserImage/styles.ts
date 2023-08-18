import { styled } from '@/src/styles';

export const UserImageContainer = styled('div', {
  background: '$gradient-vertical',
  padding: '2px',
  borderRadius: '$full',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',

  '& > img': {
    borderRadius: '$full',
    width: '$10',
    height: '$10',
  },
});
