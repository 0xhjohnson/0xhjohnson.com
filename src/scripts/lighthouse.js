const globby = require('globby');
const fs = require('fs');

(async () => {
  const pages = await globby([
    // include
    'src/pages/*.tsx',
    '_posts/*.mdx',
    // exclude
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/404.tsx'
  ]);

  // probs a good idea to only test a few _posts in the future
  // no need to run lighthouse on all of them
  const urls = pages
    .map((page) => {
      const path = page
        .replace('src/', '')
        .replace('_posts', '/blog')
        .replace('pages', '')
        .replace('.tsx', '')
        .replace('.mdx', '');
      const route = path === '/index' ? '' : path;

      return `${`https://0xhjohnson.com${route}`}`;
    })
    .join(' ');

  fs.writeFileSync('public/lighthouse/urls.txt', urls);
})();
