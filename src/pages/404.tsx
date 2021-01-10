import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

function NotFound() {
  return (
    <>
      <NextSeo title="404 Not Found — Hunter Johnson" />
      <div className="py-16 max-w-sm mx-auto space-y-6">
        <div className="flex justify-center">
          <Image
            src="/assets/not-found.svg"
            alt="Not found"
            width={125}
            height={125}
          />
        </div>
        <div className="flex justify-center">
          <p className="pr-4 text-lg font-mono text-gray-500 dark:text-gray-300 border-r border-gray-600 tracking-wider">
            404
          </p>
          <p className="ml-4 text-lg font-mono text-gray-500 dark:text-gray-300 uppercase tracking-wider">
            NOT FOUND
          </p>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          You appear to have lost your way. Double check the URL or head back to
          the homepage.
        </p>
        <Link href="/">
          <a className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
            Go home
          </a>
        </Link>
      </div>
    </>
  );
}

export default NotFound;
