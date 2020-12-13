import Hero from '@/components/hero';
import Unsplash from '@/components/stats/unsplash';
import Github from '@/components/stats/github';

function Stats() {
  return (
    <div className="pt-16 divide-y-2 divide-gray-100 dark:divide-gray-800">
      <Hero
        title="Stats"
        subtitle="Dashboard of sorts to track my metrics on platforms such as Unsplash and Github."
      />
      <section className="pt-8 pb-12">
        <Unsplash />
        <Github />
      </section>
    </div>
  );
}

export default Stats;
