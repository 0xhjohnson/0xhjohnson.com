import dayjs from 'dayjs';
import Image from 'next/image';
import { FrontMatter } from '@/types/post';

import PageTitle from '@/components/page-title';

type Props = {
  frontMatter: FrontMatter;
};

function PostHeader({ frontMatter }: Props) {
  const formattedDate = dayjs(frontMatter.isoDate).format(
    'dddd, MMMM DD, YYYY'
  );

  return (
    <header className="pt-6">
      <div className="text-center space-y-1">
        <time
          className="font-medium text-gray-500 dark:text-gray-400"
          dateTime={frontMatter.isoDate}
        >
          {formattedDate}
        </time>
        <PageTitle title={frontMatter.title} />
        <div className="pt-6 pb-10 flex justify-center items-center border-b-2 border-gray-100 dark:border-gray-800">
          <div className="flex">
            <Image
              src="/assets/avatar.png"
              width={40}
              height={40}
              className="rounded-full"
              alt="Author avatar"
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
