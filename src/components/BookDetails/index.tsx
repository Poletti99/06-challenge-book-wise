import { StarsRating } from '@/src/pages/home/components/StarsRating';
import { ComponentProps } from 'react';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { BookDetailsContainer, BookDetailsContent, BookImage } from './styles';
import { BookT } from '@/src/pages/explore/types';

const MAP_HEADING_SIZE = {
  sm: 'md',
  md: 'lg',
  lg: 'md',
  xl: 'lg',
} as const;

interface BookDetailsProps extends ComponentProps<typeof BookDetailsContainer> {
  name: string;
  author: string;
  coverURL: string;
  ratings: {
    id: string;
    rate: number;
  }[];
}

export function BookDetails({
  size = 'md',
  name,
  author,
  coverURL,
  ratings,
}: BookDetailsProps) {
  return (
    <BookDetailsContainer size={size}>
      <BookImage
        src={coverURL?.replace('public', '')}
        alt={name}
        height={94}
        width={64}
        size={size}
      />
      <BookDetailsContent>
        <div>
          <Heading
            size={MAP_HEADING_SIZE[size as keyof typeof MAP_HEADING_SIZE]}
          >
            {name}
          </Heading>
          <Text>{author}</Text>
        </div>
        <StarsRating ratings={ratings} />
      </BookDetailsContent>
    </BookDetailsContainer>
  );
}
