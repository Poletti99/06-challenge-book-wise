import { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Nunito_Sans } from 'next/font/google';
import { ReactElement, ReactNode } from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { globalStyles } from '../styles/global';

globalStyles();

const nunito = Nunito_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function defaultLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultLayout;
  return (
    <SessionProvider session={session}>
      <div className={nunito.className}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </SessionProvider>
  );
}
