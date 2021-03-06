import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import {
  HiCursorClick,
  HiSparkles,
  HiCurrencyDollar,
  HiLightningBolt
} from 'react-icons/hi';
import { getAllPosts } from '@/lib/api';
import { Post } from '@/types/post';
import Hero from '@/components/hero';
import PostCard from '@/components/post-card';
import ProjectColumn from '@/components/project-column';
import Layout from '@/components/layout';

type IndexProps = {
  newPosts: Post[];
};

function Index({ newPosts }: IndexProps) {
  return (
    <Layout>
      <NextSeo
        title="Hunter Johnson — Developer, sneakerhead, keyboard enthusiast"
        description="Developer, sneakerhead, keyboard enthusiast. Known on the internet as 0xhjohnson."
      />
      <div className="pt-16 divide-y-2 divide-gray-100 dark:divide-gray-800">
        <Hero
          title="Hey, I'm Hunter Johnson"
          subtitle="Developer, sneakerhead, keyboard enthusiast. Known on the internet as 0xhjohnson."
        />
        <section className="pb-12">
          <h2 className="pt-12 pb-8 text-gray-900 dark:text-gray-100 text-2xl font-bold">
            Recent posts
          </h2>
          <div className="grid gap-y-12">
            {newPosts.map((post) => (
              <PostCard key={post.frontMatter.slug} post={post} />
            ))}
          </div>
        </section>
        <section className="pb-16">
          <h2 className="pt-12 pb-8 text-gray-900 dark:text-gray-100 text-2xl font-bold">
            Projects
          </h2>
          <div className="grid gap-x-10 gap-y-12 grid-cols-1 md:grid-cols-2 pb-4">
            <ProjectColumn
              title="Captcha Harvester"
              summary="Node cli to casually harvest captchas from supremenewyork and others."
              icon={<HiCursorClick className="h-6 w-6" />}
              link="https://github.com/0xhjohnson/captcha-harvester"
            />
            <ProjectColumn
              title="Slicesum"
              summary="Budgeting for everyone who wants to save, invest, and make their money work for them."
              icon={<HiCurrencyDollar className="h-6 w-6" />}
              link="https://slicesum.com"
            />
            <ProjectColumn
              title="Gotham Theme Sublime"
              summary="Very dark Sublime Text 3 UI theme. Inspired by Gotham color scheme."
              icon={<HiSparkles className="h-6 w-6" />}
              link="https://github.com/0xhjohnson/gotham-theme-sublime"
            />
            <ProjectColumn
              title="React Tailwind Starter"
              summary="Minimal starter for React Tailwind app with reasonable defaults."
              icon={<HiLightningBolt className="h-6 w-6" />}
              link="https://github.com/0xhjohnson/react-tailwind-starter"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const newPosts = posts.slice(0, 3);

  return {
    props: { newPosts }
  };
};
