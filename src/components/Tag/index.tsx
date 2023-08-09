import { ReactNode } from 'react';
import { TagContainer } from './styles';

interface TagProps {
  children: ReactNode;
  selected: boolean;
}

export function Tag({ children, selected = false }: TagProps) {
  return <TagContainer selected={selected}>{children}</TagContainer>;
}
