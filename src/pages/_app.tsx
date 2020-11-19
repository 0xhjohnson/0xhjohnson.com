import { AppProps } from 'next/app';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased dark:bg-gray-800">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
