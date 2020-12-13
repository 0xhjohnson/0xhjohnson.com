import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getAllPosts, getMeta } from '@/lib/api';
import Post from '@/types/post';
import Meta from '@/types/meta';
import Hero from '@/components/hero';
import PostCard from '@/components/post-card';

type Props = {
  allPosts: Post[];
  meta: Meta;
};

function Blog({ allPosts, meta }: Props) {
  return (
    <>
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
      <div className="pt-16 divide-y-2 divide-gray-100 dark:divide-gray-800">
        <Hero
          title="Recent posts"
          subtitle="Personal blog by Hunter Johnson aka 0xhjohson."
        />
        <div className="grid pt-12 pb-16 gap-y-12">
          {allPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  const meta = JSON.parse(getMeta());

  return {
    props: { allPosts, meta }
  };
};
