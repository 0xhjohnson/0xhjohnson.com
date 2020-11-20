import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllPosts, getMeta } from '@/lib/api';
import Post from '@/types/post';
import Meta from '@/types/meta';
import Layout from '@/components/layout';
import Hero from '@/components/hero';
import PostCard from '@/components/post-card';

type IndexProps = {
  allPosts: Post[];
  meta: Meta;
};

function Index({ allPosts, meta }: IndexProps) {
  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* open graph */}
        <meta name="og:url" content={meta.url} />
        <meta name="og:type" content="article" />
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.description} />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.author} />
        <meta name="twitter:creator" content={meta.author} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <div className="pt-24 px-4 max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-600">
        <Hero />
        <div className="grid my-12 gap-y-12">
          {allPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  const meta = JSON.parse(getMeta());

  return {
    props: { allPosts, meta }
  };
};
