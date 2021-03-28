import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import '../styles/tailwind.css';
import Container from '@/components/container';
import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased">
      <DefaultSeo
        title="Hunter Johnson — Developer, sneakerhead, keyboard enthusiast"
        description="Developer, sneakerhead, keyboard enthusiast. Known on the internet as 0xhjohnson."
        openGraph={{
          url: 'https://0xhjohnson.com',
          title: 'Hunter Johnson — Developer, sneakerhead, keyboard enthusiast',
          description:
            'Developer, sneakerhead, keyboard enthusiast. Known on the internet as 0xhjohnson.',
          type: 'website',
          images: [
            {
              url: '/android-chrome-512x512.png',
              width: 512,
              height: 512,
              alt: 'Android chrome icon'
            },
            {
              url: '/apple-touch-icon.png',
              width: 180,
              height: 180,
              alt: 'Apple touch icon'
            }
          ]
        }}
        twitter={{
          handle: '@0xhjohnson',
          site: '@0xhjohnson',
          cardType: 'summary_large_image'
        }}
      />
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
