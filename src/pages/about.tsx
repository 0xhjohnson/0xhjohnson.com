import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import Art from '@/types/art';
import Hero from '@/components/hero';
import SpotifyGroup from '@/components/spotify-group';

type Track = {
  id: string;
  title: string;
  trackUrl: string;
  artist: string;
  art: Art;
};

type Artist = {
  id: string;
  title: string;
  artistUrl: string;
  art: Art;
  genre: string;
};

function Stats() {
  const { data: tracks } = useSWR('/api/top-tracks', fetcher);
  const { data: artists } = useSWR('/api/top-artists', fetcher);

  return (
    <div className="pt-16 divide-y-2 divide-gray-100 dark:divide-gray-800">
      <Hero
        title="About"
        subtitle="Up close and personal with 0xhjohnson. Music taste says a lot about a person."
      />
      <div className="py-6">
        <p className="text-gray-700 dark:text-gray-300 my-4">
          Hey, I&apos;m Hunter Johnson. Software engineer, sneakerhead, and
          keyboard enthusiast known on the internet as 0xhjohnson. I do contract
          work at Lockheed Martin, building full-stack web apps.
        </p>
        <p className="text-gray-700 dark:text-gray-300 my-4">
          I grew up on the west coast of Florida and am finishing up my last
          semester at UCF. Graduating with an IT degree with a focus on security
          and computer science. Spend my free time playing Warzone / Cyberpunk,
          listening to music, and working out.
        </p>
      </div>
      <section className="pt-8 pb-16 grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 className="pb-4 text-gray-900 dark:text-gray-100 text-2xl font-bold">
            Songs
          </h2>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {tracks?.tracks.map((track: Track) => (
              <SpotifyGroup
                key={track.id}
                title={track.title}
                text={track.artist}
                art={track.art}
                link={track.trackUrl}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="pb-4 text-gray-900 dark:text-gray-100 text-2xl font-bold">
            Artists
          </h2>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {artists?.artists.map((artist: Artist) => (
              <SpotifyGroup
                key={artist.id}
                title={artist.title}
                text={artist.genre}
                art={artist.art}
                link={artist.artistUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stats;
