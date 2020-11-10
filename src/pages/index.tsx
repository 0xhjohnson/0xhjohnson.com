import Head from 'next/head';
import Layout from '../components/layout';
import Hero from '../components/hero';

function Home() {
  return (
    <Layout>
      <Head>
        <title>0xhjohnson — A blog by Hunter Johnson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white mt-24 px-4 max-w-2xl mx-auto">
        <Hero />
      </div>
    </Layout>
  );
}

export default Home;
