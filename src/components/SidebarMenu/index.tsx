import Logo from '@/src/assets/logo-small.svg';
import Image from 'next/image';
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react';
import {
  MenuItem,
  MenuLoginButton,
  SidebarMenuContainer,
  SignOutButton,
} from './styles';
import { useSession, signOut } from 'next-auth/react';
import {
  MouseEventHandler,
  ReactEventHandler,
  useEffect,
  useState,
} from 'react';
import { UserImage } from '../UserImage';

type User = {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
};
export function SidebarMenu() {
  const [userLoggedIn, setUserLoggedIn] = useState<User | null>(null);

  const session = useSession();

  useEffect(() => {
    if (session.status === 'authenticated') {
      setUserLoggedIn(session.data.user);
    }
  }, [session.status]);

  async function handleSignOut() {
    await signOut({ callbackUrl: '/' });
  }

  return (
    <SidebarMenuContainer>
      <div>
        <Image src={Logo} alt="" />
        <nav>
          <MenuItem href="/home" active>
            <ChartLineUp /> Início
          </MenuItem>

          <MenuItem href="/explore" active={false}>
            <Binoculars /> Explorar
          </MenuItem>
          {userLoggedIn && (
            <MenuItem href="/profile" active={false}>
              <User /> Perfil
            </MenuItem>
          )}
        </nav>
      </div>

      <footer>
        {userLoggedIn ? (
          <SignOutButton href="#" onClick={handleSignOut}>
            <UserImage src={userLoggedIn.avatar_url} />
            <span>{userLoggedIn?.name}</span>
            <SignOut />
          </SignOutButton>
        ) : (
          <MenuLoginButton href="/">
            Fazer Login <SignIn />
          </MenuLoginButton>
        )}
      </footer>
    </SidebarMenuContainer>
  );
}
