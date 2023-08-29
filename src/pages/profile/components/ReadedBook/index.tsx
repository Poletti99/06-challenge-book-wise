import { Heading } from '@/src/components/Heading';
import { Text } from '@/src/components/Text';
import { StarsRating } from '@/src/pages/home/components/StarsRating';
import { PopularBooks } from '@/src/pages/home/index.page';
import { formatDate } from '@/src/utils/date-formatter';
import Image from 'next/image';
import {
  ReadedBookContainer,
  ReadedBookContent,
  ReadedBookDetails,
  ReadedBookInfos,
} from './styles';

interface ReadedBookProps extends Omit<PopularBooks, 'id'> {
  createdAt: string;
  ratingDescription: string;
}

export function ReadedBook({
  author,
  cover_url,
  createdAt,
  name,
  ratings,
  ratingDescription,
}: ReadedBookProps) {
  return (
    <ReadedBookContainer>
      <Text>{formatDate(createdAt)}</Text>
      <ReadedBookContent>
        <ReadedBookDetails>
          <Image
            src={cover_url.replace('public', '')}
            alt=""
            width={98}
            height={134}
          />
          <ReadedBookInfos>
            <div>
              <Heading size="lg">{name}</Heading>
              <Text>{author}</Text>
            </div>

            <StarsRating ratings={ratings} />
          </ReadedBookInfos>
        </ReadedBookDetails>
        <Text>{ratingDescription}</Text>
      </ReadedBookContent>
    </ReadedBookContainer>
  );
}
