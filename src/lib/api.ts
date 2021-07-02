import fs from 'fs';
import Promise from 'bluebird';
import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import { replace, sort, descend, prop } from 'ramda';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = join(process.cwd(), '_posts');

/*
 * fine with using synchronous node api since it only runs at build time
 * normally would prefer to use async api to free up the thread
 */

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const actualSlug = replace(/\.mdx$/, '', slug);
  const fullPath = join(postsDirectory, `${actualSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContents);
  const frontMatter = {
    ...data,
    date: new Date(data.date).toLocaleDateString(),
    isoDate: new Date(data.date).toISOString(),
    readTime: readingTime(content).text,
    slug: actualSlug,
    title: data.title
  };
  const mdxSource = await serialize(content, {
    scope: frontMatter,
    mdxOptions: {
      rehypePlugins: [mdxPrism]
    }
  });

  return {
    isoDate: frontMatter.isoDate,
    mdxSource,
    frontMatter
  };
}

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const unsortedPosts = await Promise.map(slugs, function (slug) {
    return getPostBySlug(slug);
  });

  return sort(descend(prop('isoDate')))(unsortedPosts);
}
