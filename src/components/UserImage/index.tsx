import Image from 'next/image';
import { UserImageContainer } from './styles';
import Hero from '@/src/assets/hero.png';

export function UserImage() {
  return (
    <UserImageContainer>
      <Image src={Hero} alt="" width={40} height={40} />
    </UserImageContainer>
  );
}
