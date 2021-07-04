import * as R from 'remeda';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { getTopArtistsTracks } from '@/lib/spotify';

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (_: VercelRequest, res: VercelResponse) {
  try {
    const response = await getTopArtistsTracks('tracks');
    const { items }: SpotifyApi.UsersTopTracksResponse = await response.json();

    const tracks = R.pipe(
      items,
      R.take(5),
      R.map((track) => ({
        id: track.id,
        title: track.name,
        trackUrl: track.external_urls.spotify,
        art: R.last(track.album.images),
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
