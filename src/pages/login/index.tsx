import Hero from '@/src/assets/hero.png';
import Logo from '@/src/assets/logo-big.svg';
import LogoGithub from '@/src/assets/logo-github.svg';
import LogoGoogle from '@/src/assets/logo-google.svg';
import LogoGuest from '@/src/assets/logo-guest.svg';
import Image from 'next/image';
import {
  HeroBackdrop,
  HeroContainer,
  LoginButton,
  LoginContainer,
  LoginHeader,
  LoginOptions,
  LoginOptionsContainer,
  LoginOptionsContent,
  LogoContainer,
} from './styles';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  async function handleGuestLogin() {
    await router.push('/home');
  }

  return (
    <LoginContainer>
      <HeroContainer>
        <HeroBackdrop />
        <LogoContainer>
          <Image src={Logo} alt="" quality={100} />
        </LogoContainer>
        <Image src={Hero} alt="" width={598} />
      </HeroContainer>
      <LoginOptionsContainer>
        <LoginOptionsContent>
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
            <LoginButton onClick={handleGuestLogin}>
              <Image src={LogoGuest} alt="" />
              Acessar como visitante
            </LoginButton>
          </LoginOptions>
        </LoginOptionsContent>
      </LoginOptionsContainer>
    </LoginContainer>
  );
}
