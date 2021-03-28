import Document, { Html, Head, Main, NextScript } from 'next/document';

const CLOUDFLARE_ANALYTICS_TOKEN = process.env.CLOUDFLARE_ANALYTICS_TOKEN;

class MyDocument extends Document {
  render() {
    return (
      <Html>
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
          <script src="/noflash.js" />
          <script
            defer
            src={`https://static.cloudflareinsights.com/beacon.min.js?token=${CLOUDFLARE_ANALYTICS_TOKEN}`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
