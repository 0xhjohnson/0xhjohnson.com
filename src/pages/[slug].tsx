import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { map, replace } from 'ramda';
import { getPostBySlug, getPostSlugs, getMeta } from '@/lib/api';
import Post from '@/types/post';
import Meta from '@/types/meta';
import Layout from '@/components/layout';
import PostHeader from '@/components/post-header';

type Props = {
  post: Post;
  meta: Meta;
};

type Renderer = {
  language: string;
  value: string;
};

const renderers = {
  code: ({ language, value }: Renderer) => {
    return (
      <SyntaxHighlighter
        style={nord}
        language={language}
        children={value}
        codeTagProps={{ className: 'font-mono' }}
      />
    );
  }
};

function BlogPost({ post, meta }: Props) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        {/* open graph */}
        <meta name="og:url" content={meta.url} />
        <meta name="og:type" content="article" />
        <meta name="og:title" content={post.title} />
        <meta name="og:description" content={post.excerpt} />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.author} />
        <meta name="twitter:creator" content={meta.author} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
      </Head>
      <PostHeader post={post} />
      <article className="prose dark:prose-dark pt-10 pb-12">
        <ReactMarkdown renderers={renderers} children={post.content} />
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
  const meta = JSON.parse(getMeta());

  return {
    props: {
      post,
      meta
    }
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  const actualSlugs = map(replace(/\.md$/, ''))(slugs);

  return {
    paths: actualSlugs.map((slug) => {
      return {
        params: { slug }
      };
    }),
    fallback: false
  };
}
