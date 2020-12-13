import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import StatCard from './stat-card';

function Unsplash() {
  const { data } = useSWR('/api/unsplash', fetcher);

  const downloads = data?.downloads?.toLocaleString();
  const views = data?.views?.toLocaleString();
  const link = 'https://unsplash.com/@0xhjohnson';

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-4">
      <StatCard title="Unsplash Views" stat={views} link={link} />
      <StatCard title="Unsplash Downloads" stat={downloads} link={link} />
    </div>
  );
}

export default Unsplash;
