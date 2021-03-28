import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '@/lib/analytics';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
          `
            }}
          />
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
          <script src="noflash.js" />
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
