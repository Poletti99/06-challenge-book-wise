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
import { NextPageWithLayout } from '../_app.page';
import { ReactElement, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';

const Login: NextPageWithLayout = function () {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    const isSignedIn = session.status === 'authenticated';
    if (isSignedIn) {
      console.log('desgrama');
      router.push('/home');
    }
  }, [session]);

  async function login(provider: 'google' | 'github') {
    await signIn(provider, { callbackUrl: '/home' });
  }

  async function handleLoginWithGoogle() {
    await login('google');
  }

  async function handleLoginWithGithub() {
    await login('github');
  }

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
            <LoginButton onClick={handleLoginWithGoogle}>
              <Image src={LogoGoogle} alt="" width={32} height={32} />
              Entrar com Google
            </LoginButton>
            <LoginButton onClick={handleLoginWithGithub}>
              <Image src={LogoGithub} alt="" width={32} height={32} />
              Entrar com Github
            </LoginButton>
            <LoginButton onClick={handleGuestLogin}>
              <Image src={LogoGuest} alt="" width={32} height={32} />
              Acessar como visitante
            </LoginButton>
          </LoginOptions>
        </LoginOptionsContent>
      </LoginOptionsContainer>
    </LoginContainer>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Login;
