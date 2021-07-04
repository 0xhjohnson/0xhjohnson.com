import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type FrontMatter = {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
  isoDate: string;
  readTime: string;
};

export type Post = {
  isoDate: string;
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
};
