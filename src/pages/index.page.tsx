import { Tag } from '../components/Tag';
import { TextInput } from '../components/TextInput';

export default function Home() {
  return (
    <>
      <h1>Aoba</h1>
      <TextInput placeholder="Banana" />
      <Tag selected={false}>Texto</Tag>
      <Tag selected>Texto</Tag>
    </>
  );
}
