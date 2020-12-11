import * as R from 'remeda';
import { NowRequest, NowResponse } from '@vercel/node';
import { getTopTracks } from '@/lib/spotify';

export default async function (req: NowRequest, res: NowResponse) {
  try {
    const response = await getTopTracks();
    const { items }: SpotifyApi.UsersTopTracksResponse = await response.json();

    const tracks = R.pipe(
      items,
      R.take(10),
      R.map((track) => ({
        title: track.name,
        trackUrl: track.external_urls.spotify,
        artist: R.map(track.artists, (artist) => artist.name).join(', ')
      }))
    );

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    return res.json({ tracks });
  } catch (e) {
    console.error(`Failed to fetch top tracks: ${e}`);
  }
}
