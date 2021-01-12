import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

function NotFound() {
  return (
    <>
      <NextSeo title="404 Not Found — Hunter Johnson" />
      <div className="py-16 max-w-sm mx-auto space-y-5">
        <Image
          src="/assets/not-found.svg"
          alt="Page not found"
          width={400}
          height={235}
        />
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
