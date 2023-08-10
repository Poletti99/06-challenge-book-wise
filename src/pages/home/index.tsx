import Image from 'next/image';
import { Tag } from '../../components/Tag';
import { TextInput } from '../../components/TextInput';
import {
  HeroBackdrop,
  HeroContainer,
  HeroText,
  HomeContainer,
  LoginButton,
  LoginContainer,
  LoginContent,
  LoginHeader,
  LoginOptions,
} from './styles';
import Logo from '@/src/assets/logo.svg';
import Hero from '@/src/assets/hero.png';
import LogoGoogle from '@/src/assets/logo-google.svg';
import LogoGithub from '@/src/assets/logo-github.svg';
import LogoGuest from '@/src/assets/logo-guest.svg';

export default function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroBackdrop />
        <HeroText>
          <Image src={Logo} alt="" width={48} />
          BookWise
        </HeroText>
        <Image src={Hero} alt="" width={598} />
      </HeroContainer>
      <LoginContainer>
        <LoginContent>
          <LoginHeader>
            <h2>Boas Vindas!</h2>
            <p>Faça seu login ou acesse como visitante</p>
          </LoginHeader>

          <LoginOptions>
            <LoginButton>
              <Image src={LogoGoogle} alt="" />
              Entrar com Google
            </LoginButton>
            <LoginButton>
              <Image src={LogoGithub} alt="" />
              Entrar com Github
            </LoginButton>
            <LoginButton>
              <Image src={LogoGuest} alt="" />
              Acessar como visitante
            </LoginButton>
          </LoginOptions>
        </LoginContent>
      </LoginContainer>
    </HomeContainer>
  );
}
