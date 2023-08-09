import { styled } from '@/src/styles';

export const InputConaiter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$3 $4',
  border: '1px solid $gray500',
  borderRadius: '$sm',

  svg: {
    color: '$gray500',
    marginLeft: '$2',
    height: '$5',
    width: '$5',
  },

  '&:has(input:focus)': {
    borderColor: '$green200',

    svg: {
      color: '$green200',
    },
  },
});

export const Input = styled('input', {
  background: 'transparent',
  color: '$gray200',
  fontSize: '$sm',
  width: '100%',
  border: 0,

  '&:focus': {
    outline: 0,
  },

  '&::placeholder': {
    color: '$gray400',
  },
});
