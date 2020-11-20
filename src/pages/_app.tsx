import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased dark:bg-gray-800">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
