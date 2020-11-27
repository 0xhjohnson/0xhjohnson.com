function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center">
          <p className="pr-4 text-lg font-mono text-gray-500 dark:text-gray-300 border-r border-gray-600 tracking-wider">
            404
          </p>
          <p className="ml-4 text-lg font-mono text-gray-500 dark:text-gray-300 uppercase tracking-wider">
            NOT FOUND
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
