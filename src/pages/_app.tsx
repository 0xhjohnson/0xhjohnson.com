import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';
import Layout from '@/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
