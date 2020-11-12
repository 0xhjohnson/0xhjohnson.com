import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@/lib/api';
import Post from '@/types/post';
import Layout from '../components/layout';
import Hero from '../components/hero';

type IndexProps = {
  allPosts: Post[];
};

function Index({ allPosts }: IndexProps) {
  console.log(allPosts);
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

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts }
  };
};
