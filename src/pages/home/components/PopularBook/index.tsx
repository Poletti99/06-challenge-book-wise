import Image from 'next/image';
import { PopularBookContainer, PopularBookInfos } from './styles';
import Hero from '@/src/assets/hero.png';
import { Heading } from '@/src/components/Heading';
import { Text } from '@/src/components/Text';
import { StarsRating } from '../StarsRating';
import { PopularBooks } from '../../index.page';

interface PopularBookProps extends Omit<PopularBooks, 'id'> {}

export function PopularBook({
  author,
  cover_url,
  name,
  ratings,
}: PopularBookProps) {
  return (
    <PopularBookContainer>
      <Image
        src={cover_url.replace('public', '')}
        alt=""
        width={64}
        height={94}
      />
      <PopularBookInfos>
        <div>
          <Heading>{name}</Heading>
          <Text>{author}</Text>
        </div>

        <StarsRating ratings={ratings} />
      </PopularBookInfos>
    </PopularBookContainer>
  );
}
