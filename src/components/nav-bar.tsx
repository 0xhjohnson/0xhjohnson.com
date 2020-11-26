import Link from 'next/link';
import Image from 'next/image';
import { HiMenu } from 'react-icons/hi';

function NavBar() {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-100 dark:border-gray-600 py-6 md:justify-start md:space-x-10">
      <div className="flex w-0 flex-1">
        <Link href="/">
          <a>
            <Image
              src="/android-chrome-512x512.png"
              alt="0xhjohnson logo"
              width={40}
              height={40}
            />
          </a>
        </Link>
      </div>
      <div className="-mr-2 -my-2 md:hidden">
        <button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-600 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
          <span className="sr-only">Open menu</span>
          <HiMenu className="h-6 w-6" />
        </button>
      </div>
      <nav className="hidden md:flex space-x-10">
        <Link href="/">
          <a className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition">
            Home
          </a>
        </Link>
        <Link href="/blog">
          <a className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition">
            Blog
          </a>
        </Link>
        <Link href="/about">
          <a className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition">
            About
          </a>
        </Link>
        <Link href="/stats">
          <a className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition">
            Stats
          </a>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
