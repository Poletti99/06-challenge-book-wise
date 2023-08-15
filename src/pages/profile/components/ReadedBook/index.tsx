import { Text } from '@/src/components/Text';
import {
  ReadedBookContainer,
  ReadedBookContent,
  ReadedBookDetails,
  ReadedBookInfos,
} from './styles';
import Image from 'next/image';
import Logo from '@/src/assets/hero.png';
import { Heading } from '@/src/components/Heading';
import { StarsRating } from '@/src/pages/home/components/StarsRating';

export function ReadedBook() {
  return (
    <ReadedBookContainer>
      <Text>Há 2 dias</Text>
      <ReadedBookContent>
        <ReadedBookDetails>
          <Image src={Logo} alt="" width={98} height={134} />
          <ReadedBookInfos>
            <div>
              <Heading size="lg">A revolução dos bichos</Heading>
              <Text>George Orwell</Text>
            </div>

            <StarsRating />
          </ReadedBookInfos>
        </ReadedBookDetails>
        <Text>
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </Text>
      </ReadedBookContent>
    </ReadedBookContainer>
  );
}
