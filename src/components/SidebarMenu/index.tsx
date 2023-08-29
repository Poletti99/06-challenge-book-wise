import Logo from '@/src/assets/logo-small.svg';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { UserImage } from '../UserImage';
import {
  MenuItem,
  MenuLoginButton,
  SidebarMenuContainer,
  SignOutButton,
} from './styles';
import { useRouter } from 'next/router';

type User = {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
};

type Tab = 'home' | 'explore' | 'profile';
export function SidebarMenu() {
  const [userLoggedIn, setUserLoggedIn] = useState<User | null>(null);
  const router = useRouter();
  const pathname = router.pathname.replace('/', '');
  const session = useSession();

  useEffect(() => {
    if (session.status === 'authenticated') {
      setUserLoggedIn(session.data.user);
    }
  }, [session.status]);

  function isTabActive(tab: Tab) {
    return tab === pathname;
  }

  async function handleSignOut() {
    await signOut({ callbackUrl: '/' });
  }

  return (
    <SidebarMenuContainer>
      <div>
        <Image src={Logo} alt="" />
        <nav>
          <MenuItem href="/home" active={isTabActive('home')}>
            <ChartLineUp /> Início
          </MenuItem>

          <MenuItem href="/explore" active={isTabActive('explore')}>
            <Binoculars /> Explorar
          </MenuItem>
          {userLoggedIn && (
            <MenuItem href="/profile" active={isTabActive('profile')}>
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
