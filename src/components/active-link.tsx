import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

type Props = {
  children?: React.ReactNode;
  href: string;
};

function ActiveLink({ children, href }: Props) {
  const router = useRouter();

  const linkClasses = classNames(
    'font-medium',
    'dark:hover:text-gray-100',
    'transition',
    {
      'text-gray-900 dark:text-gray-100': router.pathname === href,
      'text-gray-500 hover:text-gray-900 dark:text-gray-400':
        router.pathname !== href
    }
  );

  return (
    <Link href={href}>
      <a className={linkClasses}>{children}</a>
    </Link>
  );
}

export default ActiveLink;
