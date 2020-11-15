import React from 'react';
import { pluck, reduce } from 'ramda';
import { getPostBySlug, getAllPosts } from '@/lib/api';
import Post from '@/types/post';
import RenderMarkdown from '@/components/render-markdown';
import Layout from '@/components/layout';

type Props = {
  post: Post;
};

function BlogPost({ post }: Props) {
  return (
    <Layout>
      <article className="px-6 max-w-2xl mx-auto">
        <RenderMarkdown content={post.content} />
      </article>
    </Layout>
  );
}

export default BlogPost;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, true);

  return {
    props: {
      post
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const postSlugs = pluck('slug', posts);

  const reducer = (acc: Params[], curr: string) => {
    acc.push({
      params: { slug: curr }
    });

    return acc;
  };
  const slugPaths = reduce(reducer, [], postSlugs);

  return {
    paths: slugPaths,
    fallback: false
  };
}
