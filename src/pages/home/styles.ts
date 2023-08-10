import { styled } from '@/src/styles';

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$4',
  height: '100vh',
  gap: '$10',
});

export const LoginContainer = styled('div', {
  padding: '8rem',
  height: '100%',
  width: '100%',
});

export const LoginContent = styled('div', {
  maxWidth: 372,
  width: 372,
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
});

export const LoginOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

export const LoginHeader = styled('div', {
  h2: {
    fontSize: '2xl',
    lineHeight: '$short',
  },
  p: {
    color: '$gray200',
    lineHeight: '$base',
  },
});

export const LoginButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left',
  padding: '$5 $6',
  gap: '$5',

  background: '$gray600',
  borderRadius: '$md',

  fontSize: '$lg',
  fontWeight: '$bold',
  lineHeight: '$base',

  cursor: 'pointer',

  '& > svg': {
    width: 32,
    height: 32,
  },
});

export const HeroContainer = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  maxHeight: '100%',
  height: '100%',
  minWidth: 598,
  lineHeight: 0,

  '& > img': {
    borderRadius: '$md',
    height: '100%',
    aspectRatio: '1/1',
    objectFit: 'cover',
  },
});

export const HeroBackdrop = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background:
    'linear-gradient(0deg, rgba(42, 40, 121, 0.60) 0%, rgba(42, 40, 121, 0.60) 100%), rgba(0, 0, 0, 0.60)',
  backdropFilter: 'blur(1px)',
  borderRadius: '$md',
  lineHeight: 0,
});

export const HeroText = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',

  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: '$base',

  background: '$gradient-horizontal',
  backgroundClip: 'text',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',

  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
});
