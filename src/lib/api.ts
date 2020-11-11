import fs from 'fs';
import { join } from 'path';
import { replace } from 'ramda';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const actualSlug = replace(/\.md$/, '', slug);
  const fullPath = join(postsDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type MdData = {
    [key: string]: string;
  };

  const mdData: MdData = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      mdData[field] = actualSlug;
    }
    if (field === 'content') {
      mdData[field] = content;
    }
    if (field === 'date') {
      data[field] = new Date(data[field]).toISOString();
    }

    if (data[field]) {
      mdData[field] = data[field];
    }
  });

  return mdData;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((x, y) => (x.date > y.date ? -1 : 1));

  return posts;
}
