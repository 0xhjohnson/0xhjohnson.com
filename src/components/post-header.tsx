import dayjs from 'dayjs';
import Img from 'next/image';
import Post from '@/types/post';

import PageTitle from '@/components/page-title';

type Props = {
  post: Post;
};

function PostHeader({ post }: Props) {
  const formattedDate = dayjs(post.isoDate).format('dddd, MMMM DD, YYYY');

  return (
    <header className="pt-6">
      <div className="text-center space-y-1">
        <time className="font-medium text-gray-500" dateTime={post.isoDate}>
          {formattedDate}
        </time>
        <PageTitle title={post.title} />
        <div className="pt-6 pb-10 flex justify-center items-center border-b border-gray-200 dark:border-gray-700">
          <div className="flex">
            <Img
              src="/assets/avatar.png"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="ml-3 text-left text-sm">
            <p className="text-gray-900 dark:text-gray-100 font-medium">
              Hunter Johnson
            </p>
            <a
              className="text-blue-600 hover:text-blue-500 dark:text-blue-200 dark:hover:text-blue-300 font-medium transition"
              href="https://twitter.com/0xhjohnson"
            >
              @0xhjohnson
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default PostHeader;
