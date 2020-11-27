import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';
import Container from '@/components/container';
import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container>
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default MyApp;
