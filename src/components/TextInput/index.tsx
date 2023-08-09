import { FileSearch } from 'phosphor-react';
import { Input, InputConaiter } from './styles';
import { ComponentProps } from 'react';

interface TextInputProps extends ComponentProps<typeof Input> {}

export function TextInput(props: TextInputProps) {
  return (
    <InputConaiter>
      <Input {...props} />
      <FileSearch />
    </InputConaiter>
  );
}
