import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  title: string;
  icon?: React.ReactNode;
};

function MobileActiveLink({ href, title, icon }: Props) {
  const router = useRouter();

  const linkClasses = classNames(
    '-m-3',
    'p-3',
    'flex',
    'items-center',
    'rounded-md',
    'hover:bg-gray-50',
    'hover:text-gray-900',
    'dark:hover:bg-gray-800',
    'dark:hover:text-gray-100',
    'transition',
    {
      'text-gray-900 dark:text-gray-100': router.pathname === href,
      'text-gray-500 dark:text-gray-400': router.pathname !== href
    }
  );

  return (
    <Link href={href}>
      <a className={linkClasses}>
        {icon}
        <span className="ml-3 font-medium">{title}</span>
      </a>
    </Link>
  );
}

export default MobileActiveLink;
