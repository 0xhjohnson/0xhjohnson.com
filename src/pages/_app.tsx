import 'tailwindcss/tailwind.css';
import '@/styles/global.css';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import SEO from '../../next-seo.config';
import MdxComponents from '@/components/mdx-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MdxComponents}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
