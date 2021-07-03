import Link from 'next/link';
import Image from 'next/image';

type CustomLinkProps = {
  href: string;
  children: React.ReactNode;
};

const CustomLink = ({ href, children, ...props }: CustomLinkProps) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...props}>
      {children}
    </a>
  );
};

const MdxComponents = {
  Image,
  a: CustomLink
};

export default MdxComponents;
