import { StarsRating } from '@/src/pages/home/components/StarsRating';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { BookDetailsContainer, BookDetailsContent, BookImage } from './styles';
import Hero from '@/src/assets/hero.png';
import { ComponentProps } from 'react';

const MAP_HEADING_SIZE = {
  sm: 'md',
  md: 'lg',
  lg: 'md',
  xl: 'lg',
} as const;

interface BookDetailsProps
  extends ComponentProps<typeof BookDetailsContainer> {}

export function BookDetails({ size = 'md' }: BookDetailsProps) {
  return (
    <BookDetailsContainer size={size}>
      <BookImage src={Hero} alt="" height={94} width={64} size={size} />
      <BookDetailsContent>
        <div>
          <Heading
            size={MAP_HEADING_SIZE[size as keyof typeof MAP_HEADING_SIZE]}
          >
            A revolução dos bichos
          </Heading>
          <Text>George Orwell</Text>
        </div>
        <StarsRating />
      </BookDetailsContent>
    </BookDetailsContainer>
  );
}
