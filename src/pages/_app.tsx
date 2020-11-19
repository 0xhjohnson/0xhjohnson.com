import { AppProps } from 'next/app';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
