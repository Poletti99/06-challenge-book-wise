import { Box } from '@/src/components/Box';
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
  maxWidth: '40rem',
  background: '$gray800',
  padding: '4rem 3rem 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
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

export const BookInfos = styled(Box, {});

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

export const RatingSection = styled('div', {
  '> div:first-of-type': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '$4',

    button: {
      all: 'unset',
      color: '$purple100',
      fontSize: '$md',
      fontWeight: '$bold',
      padding: '$1 $2',
      cursor: 'pointer ',
    },
  },
});

export const CommentList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

export const CommentArea = styled('textarea', {
  padding: '$3 $5',
  background: '$gray800',
  borderRadius: '$sm',
  width: '100%',
  height: '100%',
  border: '1px solid $gray500',
  resize: 'none',
});

export const NewComment = styled(Box, {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  'header > div:first-of-type': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },

  [`${CommentArea}`]: {
    margin: '$6 0 $3',
  },

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    justifyContent: 'flex-end',

    button: {
      all: 'unset',
      padding: '$2',
      borderRadius: '$sm',
      background: '$gray600',
      cursor: 'pointer',
      lineHeight: 0,

      '&:first-of-type': {
        color: '$purple100',
      },

      '&:last-of-type': {
        color: '$green100',
      },

      svg: {
        width: '$6',
        height: '$6',
      },
    },
  },
});
