import Image from 'next/image';
import { UserImageContainer } from './styles';

interface UserImageProps {
  src: string;
}
export function UserImage({ src = '' }: UserImageProps) {
  return (
    <UserImageContainer>
      <Image src={src} alt="" width={40} height={40} />
    </UserImageContainer>
  );
}
