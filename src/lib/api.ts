import fs from 'fs';
import { join } from 'path';
import { replace, map, sort, descend, prop, all, has } from 'ramda';
import matter from 'gray-matter';
import Post from '@/types/post';

const postsDirectory = join(process.cwd(), '_posts');

/*
 * fine with using synchronous node api since it only runs at build time
 * normally would prefer to use async api to free up the thread
 */

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, includeContent: boolean = false) {
  const actualSlug = replace(/\.md$/, '', slug);
  const fullPath = join(postsDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  const mdData = {
    ...data,
    slug: actualSlug,
    date: new Date(data.date).toISOString(),
    ...(includeContent && { content })
  };

  return mdData;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const unsortedPosts = map(getPostBySlug, slugs);

  return sort(descend(prop('date')))(unsortedPosts);
}
