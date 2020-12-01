import PageTitle from '@/components/page-title';

type Props = {
  title: string;
  subtitle: string;
};

function Hero({ title, subtitle }: Props) {
  return (
    <div>
      <PageTitle title={title} />
      <p className="mt-5 text-lg sm:text-xl text-gray-500 pb-12 dark:text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}

export default Hero;
