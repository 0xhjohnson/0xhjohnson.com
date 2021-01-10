type Props = {
  topCount: number;
};

function LoadingSpotifyGroup({ topCount }: Props) {
  return (
    <>
      {[...Array(topCount)].map((_, idx) => (
        <div key={idx} className="py-4 sm:px-4">
          <div className="animate-pulse flex items-center">
            <div className="rounded-full bg-gray-100 dark:bg-gray-800 h-10 w-10"></div>
            <div className="ml-4 flex-1 space-y-2">
              <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/4 sm:w-1/2"></div>
              <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/2 sm:w-3/4"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default LoadingSpotifyGroup;
