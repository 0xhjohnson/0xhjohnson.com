import Link from 'next/link';
import Img from 'next/image';
import { join } from 'ramda';
import { Post } from '@/types/post';

type Props = {
  post: Post;
};

function PostCard({ post }: Props) {
  const tags = join(`, `, post.frontMatter.tags);

  return (
    <section>
      <Link as={`/blog/${post.frontMatter.slug}`} href="/blog/[slug]">
        <a className="block p-4 rounded-md border border-gray-200 hover:border-gray-100 hover:shadow-lg dark:border-gray-600 dark:hover:border-gray-700 transition duration-150 ease-in-out">
          <p className="my-3 text-xl leading-7 font-semibold text-gray-900 dark:text-gray-200">
            {post.frontMatter.title}
          </p>
          <p className="leading-relaxed text-gray-500 dark:text-gray-400">
            {post.frontMatter.excerpt}
          </p>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <Img
                src={post.frontMatter.icon}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm leading-5 font-medium text-gray-900 dark:text-gray-200">
                {tags}
              </p>
              <div className="flex text-sm leading-5 text-gray-500 dark:text-gray-400">
                <time>{post.frontMatter.date}</time>
                <span className="mx-1">&middot;</span>
                <span>{post.frontMatter.readTime}</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </section>
  );
}

export default PostCard;
