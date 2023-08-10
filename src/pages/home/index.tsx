import Image from 'next/image';
import { Tag } from '../../components/Tag';
import { TextInput } from '../../components/TextInput';
import {
  HeroBackdrop,
  HeroContainer,
  HeroText,
  HomeContainer,
  LoginContainer,
} from './styles';
import Logo from '@/src/assets/logo.svg';
import Hero from '@/src/assets/hero.png';

export default function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroBackdrop />
        <HeroText>
          <Image src={Logo} alt="" width={48} />
          BookWise
        </HeroText>
        <Image src={Hero} alt="" height={598} />
      </HeroContainer>
      <LoginContainer>
        <h1>Aoba</h1>
      </LoginContainer>
    </HomeContainer>
  );
}
