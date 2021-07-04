import Link from 'next/link';

type Props = {
  title: string;
  stat: string;
  link: string;
};

function StatCard({ title, stat, link }: Props) {
  return (
    <Link href={link}>
      <a className="block p-4 border border-gray-200 rounded-md hover:border-gray-100 shadow-md hover:shadow-lg dark:border-gray-600 dark:hover:border-gray-700 transition">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {title}
        </p>
        <p className="mt-1 text-gray-900 dark:text-gray-100 font-semibold text-2xl">
          {stat || '\u2014'}
        </p>
      </a>
    </Link>
  );
}

export default StatCard;
