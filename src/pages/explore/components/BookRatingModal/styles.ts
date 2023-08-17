import { styled } from '@/src/styles';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.60)',
});

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  minWidth: '40rem',
  background: '$gray800',
  padding: '4rem 3rem 0',
});

export const CloseButton = styled(Dialog.Close, {
  all: 'unset',
  position: 'absolute',
  top: '1.5rem',
  right: '3rem',
  lineHeight: 0,
  cursor: 'pointer',

  '& > svg': {
    color: '$gray400',
  },
});

export const About = styled('div', {
  display: 'flex',
  gap: '3.5rem',
  marginTop: '$10',
  borderTop: '1px solid $gray600',
});

export const AboutItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$6 0',
  gap: '$4',

  '& > svg': {
    width: 24,
    height: 24,
    color: '$green100',
  },
});
