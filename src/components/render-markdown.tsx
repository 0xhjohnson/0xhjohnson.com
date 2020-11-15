import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  content: string;
};

function RenderMarkdown({ content }: Props) {
  return <ReactMarkdown source={content} />;
}

export default RenderMarkdown;
