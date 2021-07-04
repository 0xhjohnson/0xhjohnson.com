import Image from 'next/image';
import Link from 'next/link';
import Art from '@/types/art';

type Props = {
  title: string;
  text: string;
  art: Art;
  link: string;
};

function SpotifyGroup({ title, text, art, link }: Props) {
  return (
    <div className="py-4 sm:px-4">
      <div className="flex items-center">
        <Image
          src={art.url}
          alt={`${title} art`}
          width={40}
          height={40}
          className="rounded-full block"
        />
        <div className="ml-4">
          <Link href={link}>
            <a className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:underline">
              {title}
            </a>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default SpotifyGroup;
