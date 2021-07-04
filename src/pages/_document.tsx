import Document, { Html, Head, Main, NextScript } from 'next/document';

const CLOUDFLARE_ANALYTICS_TOKEN = process.env.CLOUDFLARE_ANALYTICS_TOKEN;

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter-roman.var.woff2?v=3.15"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <link
            href="/fonts/DankMono-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <script
            defer
            src={`https://static.cloudflareinsights.com/beacon.min.js?token=${CLOUDFLARE_ANALYTICS_TOKEN}`}
          />
        </Head>
        <body className="bg-white dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
