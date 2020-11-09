import Head from 'next/head'

import Layout from '../components/layout';

function Home() {
  return (
    <Layout>
      <Head>
        <title>0xhjohnson — A blog by Hunter Johnson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}

export default Home;
