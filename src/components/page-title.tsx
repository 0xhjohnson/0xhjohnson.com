import React from 'react';

type Props = {
  title: string;
};

function PageTitle({ title }: Props) {
  return (
    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {title}
    </h1>
  );
}

export default PageTitle;
