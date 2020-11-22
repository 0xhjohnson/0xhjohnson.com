import React from 'react';
import PageTitle from '@/components/page-title';

function Hero() {
  return (
    <div>
      <PageTitle title="Recent posts" />
      <p className="mt-4 text-xl text-gray-500 pb-12 dark:text-gray-400">
        Personal blog by Hunter Johnson aka 0xhjohnson.
      </p>
    </div>
  );
}

export default Hero;
