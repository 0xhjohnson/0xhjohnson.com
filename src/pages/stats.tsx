import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

function Stats() {
  const { data } = useSWR('/api/unsplash', fetcher);
  console.log(data);

  return <h1>stats</h1>;
}

export default Stats;
