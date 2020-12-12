import * as R from 'remeda';
import { NowRequest, NowResponse } from '@vercel/node';
import { getTopArtistsTracks } from '@/lib/spotify';

export default async function (req: NowRequest, res: NowResponse) {
  try {
    const response = await getTopArtistsTracks('artists');
    const { items }: SpotifyApi.UsersTopArtistsResponse = await response.json();

    const artists = R.pipe(
      items,
      R.take(5),
      R.map((artist) => ({
        id: artist.id,
        title: artist.name,
        artistUrl: artist.uri,
        art: R.last(artist.images),
        genre: R.first(artist.genres)
      }))
    );

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    return res.json({ artists });
  } catch (e) {
    console.error(`Failed to fetch top artists: ${e}`);
  }
}
