import type { AppProps } from 'next/app';
import { Nunito_Sans } from 'next/font/google';
import { globalStyles } from '../styles/global';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { DefaultLayout } from '../layouts/DefaultLayout';

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

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultLayout;
  return (
    <div className={nunito.className}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
