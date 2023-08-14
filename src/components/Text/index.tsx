import { styled } from '@/src/styles';

export const Text = styled('p', {
  lineHeight: '$base',
  margin: 0,
  color: '$gray400',

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
});
