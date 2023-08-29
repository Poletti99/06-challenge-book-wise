import { styled } from '@/src/styles';

export const UserImageContainer = styled('div', {
  background: '$gradient-vertical',
  padding: '2px',
  borderRadius: '$full',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',

  variants: {
    size: {
      sm: {
        '& > img': {
          borderRadius: '$full',
          width: '$10',
          height: '$10',
        },
      },
      lg: {
        '& > img': {
          borderRadius: '$full',
          width: '4.5rem',
          height: '4.5rem',
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});
