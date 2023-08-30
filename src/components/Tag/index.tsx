import { ComponentProps, ReactNode } from 'react';
import { TagContainer } from './styles';

interface TagProps extends ComponentProps<typeof TagContainer> {
  children: ReactNode;
  selected: boolean;
}

export function Tag({ children, selected = false, ...props }: TagProps) {
  return (
    <TagContainer selected={selected} {...props}>
      {children}
    </TagContainer>
  );
}
