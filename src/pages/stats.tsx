import { NextSeo } from 'next-seo';
import Hero from '@/components/hero';
import Unsplash from '@/components/stats/unsplash';
import Github from '@/components/stats/github';
import Layout from '@/components/layout';

function Stats() {
  return (
    <Layout>
      <NextSeo
        title="0xhjohnson stats"
        description="Dashboard of sorts to track my metrics on platforms such as Unsplash and Github."
      />
      <div className="pt-16 divide-y-2 divide-gray-100 dark:divide-gray-800">
        <Hero
          title="Stats"
          subtitle="Dashboard of sorts to track my metrics on platforms such as Unsplash and Github."
        />
        <section className="pt-8 pb-16">
          <Unsplash />
          <Github />
        </section>
      </div>
    </Layout>
  );
}

export default Stats;
