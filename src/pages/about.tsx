import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import Hero from '@/components/hero';

function Stats() {
  const { data } = useSWR('/api/top-tracks', fetcher);
  console.log(data);

  return (
    <div className="pt-16 divide-y-2 divide-gray-100 dark:divide-gray-800">
      <Hero
        title="About"
        subtitle="Up close and personal with 0xhjohnson. Music taste says a lot about a person."
      />
      <section className="pt-8 pb-12"></section>
    </div>
  );
}

export default Stats;
