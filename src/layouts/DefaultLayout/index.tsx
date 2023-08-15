import { ReactElement } from 'react';
import { DefaultLayoutContainer } from './styles';
import { SidebarMenu } from '@/src/components/SidebarMenu';

interface DefaultLayoutProps {
  children: ReactElement;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <DefaultLayoutContainer>
      <SidebarMenu />
      {children}
    </DefaultLayoutContainer>
  );
}
