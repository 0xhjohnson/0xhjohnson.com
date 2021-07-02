import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import { map, replace } from 'ramda';
import { getPostBySlug, getPostSlugs } from '@/lib/api';
import { FrontMatter } from '@/types/post';
import PostHeader from '@/components/post-header';

type Props = {
  frontMatter: FrontMatter;
  mdxSource: MDXRemoteSerializeResult;
};

function BlogPost({ frontMatter, mdxSource }: Props) {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.excerpt}
        openGraph={{
          title: frontMatter.title,
          description: frontMatter.excerpt,
          url: `https://0xhjohnson.com/blog/${frontMatter.slug}`,
          type: 'article',
          article: {
            publishedTime: frontMatter.isoDate,
            tags: frontMatter.tags
          }
        }}
      />
      <PostHeader frontMatter={frontMatter} />
      <article className="prose dark:prose-dark pt-10 pb-16">
        <MDXRemote {...mdxSource} />
      </article>
    </>
  );
}

export default BlogPost;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const { mdxSource, frontMatter } = await getPostBySlug(params.slug);

  return {
    props: { frontMatter, mdxSource }
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  const actualSlugs = map(replace(/\.mdx$/, ''))(slugs);

  return {
    paths: actualSlugs.map((slug) => {
      return {
        params: { slug }
      };
    }),
    fallback: false
  };
}
