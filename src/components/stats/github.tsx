import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import StatCard from './stat-card';

function Github() {
  const { data } = useSWR('/api/github', fetcher);

  const stars = data?.stars?.toLocaleString();
  const followers = data?.followers?.toLocaleString();
  const link = 'https://github.com/0xhjohnson';

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-4">
      <StatCard title="Github Stars" stat={stars} link={link} />
      <StatCard title="Github Followers" stat={followers} link={link} />
    </div>
  );
}

export default Github;
