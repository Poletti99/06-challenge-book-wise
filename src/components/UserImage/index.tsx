import Image from 'next/image';
import { UserImageContainer } from './styles';

interface UserImageProps {
  src: string;
  size?: 'sm' | 'lg';
}
export function UserImage({ src = '', size = 'sm' }: UserImageProps) {
  return (
    <UserImageContainer size={size}>
      <Image src={src} alt="" width={40} height={40} />
    </UserImageContainer>
  );
}
