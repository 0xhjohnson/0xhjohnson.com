import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@/lib/api';
import { Post } from '@/types/post';
import Hero from '@/components/hero';
import PostCard from '@/components/post-card';
import Layout from '@/components/layout';

type Props = {
  allPosts: Post[];
};

function Blog({ allPosts }: Props) {
  return (
    <Layout>
      <NextSeo
        title="0xhjohnson — A blog by Hunter Johnson"
        description="Personal blog by Hunter Johnson aka 0xhjohnson."
      />
      <div className="pt-16 divide-y-2 divide-gray-100 dark:divide-gray-800">
        <Hero
          title="Posts"
          subtitle="Personal blog by Hunter Johnson aka 0xhjohson."
        />
        <div className="grid pt-12 pb-16 gap-y-12">
          {allPosts.map((post) => (
            <PostCard key={post.frontMatter.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: { allPosts }
  };
};
