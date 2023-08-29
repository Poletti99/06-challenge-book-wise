import { ReactNode } from 'react';
import { Heading } from '../Heading';
import { PageTitleContainer } from './styles';

interface PageTitleProps {
  children: ReactNode;
}
export function PageTitle({ children }: PageTitleProps) {
  return (
    <PageTitleContainer as="h1" size="2xl">
      {children}
    </PageTitleContainer>
  );
}
