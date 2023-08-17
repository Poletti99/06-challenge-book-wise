import Logo from '@/src/assets/logo-small.svg';
import Image from 'next/image';
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react';
import { MenuItem, MenuLoginButton, SidebarMenuContainer } from './styles';

export function SidebarMenu() {
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

          <MenuItem href="/profile" active={false}>
            <User /> Perfil
          </MenuItem>
        </nav>
      </div>

      <footer>
        <MenuLoginButton href="/">
          Fazer Login <SignIn />
        </MenuLoginButton>
      </footer>
    </SidebarMenuContainer>
  );
}
