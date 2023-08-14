import Image from 'next/image';
import { PopularBookContainer, PopularBookInfos } from './styles';
import Hero from '@/src/assets/hero.png';
import { Heading } from '@/src/components/Heading';
import { Text } from '@/src/components/Text';
import { StarsRating } from '../StarsRating';

export function PopularBook() {
  return (
    <PopularBookContainer>
      <Image src={Hero} alt="" width={64} height={94} />
      <PopularBookInfos>
        <div>
          <Heading>A revolução dos bichos</Heading>
          <Text>George Orwell</Text>
        </div>

        <StarsRating />
      </PopularBookInfos>
    </PopularBookContainer>
  );
}
