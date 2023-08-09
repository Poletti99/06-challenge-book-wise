import type { AppProps } from 'next/app';
import { Nunito } from 'next/font/google';
import { globalStyles } from '../styles/global';

globalStyles();

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
  );
}
