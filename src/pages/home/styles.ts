import { styled } from '@/src/styles';

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$4',
  height: '100vh',
  gap: '$10',
});

export const LoginContainer = styled('div', {});

export const HeroContainer = styled('div', {
  position: 'relative',
  overflow: 'hidden',
  '& > img': {
    borderRadius: '$md',
    minWidth: 598,
  },
  lineHeight: 0,
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
