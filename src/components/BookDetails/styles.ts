import { styled } from '@/src/styles';
import Image from 'next/image';

export const BookDetailsContainer = styled('div', {
  display: 'flex',

  variants: {
    size: {
      sm: {
        gap: '$5',
      },
      md: {
        gap: '$6',
      },
      lg: {
        gap: '$5',
      },
      xl: {
        gap: '$8',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const BookDetailsContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const BookImage = styled(Image, {
  borderRadius: '$sm',
  aspectRatio: '1 / 1',
  variants: {
    size: {
      sm: {
        height: 94,
        width: 64,
      },

      md: {
        height: 134,
        width: 98,
      },
      lg: {
        height: 152,
        width: 108,
      },
      xl: {
        height: 242,
        width: 172,
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
