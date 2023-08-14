import { styled } from '@/src/styles';

export const Heading = styled('h2', {
  lineHeight: '$short',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
