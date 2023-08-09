import { styled } from '@/src/styles';

export const TagContainer = styled('button', {
  all: 'unset',
  padding: '$1 $4',
  lineHeight: '$base',
  border: '1px solid $purple100',
  color: '$purple100',
  fontSize: '$md',
  borderRadius: '$full',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray100',
    backgroundColor: '$purple200',
  },

  variants: {
    selected: {
      true: {
        backgroundColor: '$purple200',
        borderColor: '$purple200',
        color: '$gray100',

        '&:hover': {
          borderColor: '$purple100',
        },
      },
      false: {},
    },
  },
});
