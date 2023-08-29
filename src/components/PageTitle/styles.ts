import { styled } from '@/src/styles';
import { Heading } from '../Heading';

export const PageTitleContainer = styled(Heading, {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginTop: '3rem',
  marginBottom: '2.5rem',

  svg: {
    color: '$green100',
    width: 32,
    height: 32,
  },
});
