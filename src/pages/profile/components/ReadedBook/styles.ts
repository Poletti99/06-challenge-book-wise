import { Text } from '@/src/components/Text';
import { styled } from '@/src/styles';

export const ReadedBookContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

export const ReadedBookContent = styled('div', {
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  background: '$gray700',
  borderRadius: '$md',

  [`> ${Text}`]: {
    color: '$gray300',
  },
});

export const ReadedBookDetails = styled('div', {
  display: 'flex',
  gap: '$6',

  '> img': {
    borderRadius: '$sm',
  },
});

export const ReadedBookInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between ',
});
