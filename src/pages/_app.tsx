import { AppProps } from 'next/app';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased">
      <Component {...pageProps} />
      <style jsx global>{`
        @font-face {
          font-family: 'Inter var';
          font-weight: 100 900;
          font-display: swap;
          font-style: normal;
          font-named-instance: 'Regular';
          src: url('/fonts/Inter-roman.var.woff2?v=3.15') format('woff2');
        }
        @font-face {
          font-family: 'Inter var';
          font-weight: 100 900;
          font-display: swap;
          font-style: italic;
          font-named-instance: 'Italic';
          src: url('/fonts/Inter-italic.var.woff2?v=3.15') format('woff2');
        }
        @font-face {
          font-family: 'Dank mono';
          font-weight: 400;
          font-display: swap;
          font-style: normal;
          font-named-instance: 'Normal';
          src: url('/fonts/DankMono-Regular.woff2') format('woff2');
        }
        @font-face {
          font-family: 'Dank mono';
          font-weight: 400;
          font-display: swap;
          font-style: italic;
          font-named-instance: 'Italic';
          src: url('/fonts/DankMono-Italic.woff2') format('woff2');
        }
      `}</style>
    </div>
  );
}

export default MyApp;
