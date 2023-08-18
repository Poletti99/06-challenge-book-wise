import { Box } from '@/src/components/Box';
import { Text } from '@/src/components/Text';
import { styled } from '@/src/styles';

export const CommentContainer = styled(Box, {
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
});

export const CommentHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',

  '& > div:first-of-type': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
});

export const CommentText = styled(Text, {
  color: '$gray300',
});
