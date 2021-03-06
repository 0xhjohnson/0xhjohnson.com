const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('/prettier.config.js');

  const pages = await globby([
    // include
    'src/pages/*.tsx',
    '_posts/*.mdx',
    // exclude
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/404.tsx'
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('src/', '')
            .replace('_posts', '/blog')
            .replace('pages', '')
            .replace('.tsx', '')
            .replace('.mdx', '');
          const route = path === '/index' ? '' : path;

          return `
            <url>
              <loc>${`https://0xhjohnson.com${route}`}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  const formattedSitemap = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formattedSitemap);
})();
