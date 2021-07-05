[![Lighthouse Accessibility Badge](./public/lighthouse/lighthouse_accessibility.svg)](https://web.dev/accessibility-scoring/)
[![Lighthouse Best Practices Badge](./public/lighthouse/lighthouse_best-practices.svg)](https://web.dev/lighthouse-best-practices/)
[![Lighthouse Performance Badge](./public/lighthouse/lighthouse_performance.svg)](https://web.dev/performance-scoring/)
[![Lighthouse SEO Badge](./public/lighthouse/lighthouse_seo.svg)](https://web.dev/lighthouse-seo/)

# 0xhjohnson.com

My personal portfolio/blog which has gone through numerous iterations to reach this point. Built with Next.js, Typescript, MDX, and TailwindCSS. My personal playground to share my thoughts and what I've been working on.

## Structure

Primary source code is contained within `/src` directory.
- `src/pages/api/*`- [API routes](https://nextjs.org/docs/api-routes/introduction) which pull my latest stats from Spotify, GitHub, and Unsplash.
- `src/pages/blog/*`- [Static pre-rendered](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) blog pages using [MDX](https://github.com/mdx-js/mdx).
- `src/pages/*`- All other one-off pages such as About.

```
Page                                         Size     First Load JS
┌ ● /                                        2.98 kB        90.9 kB
├   /_app                                    0 B            74.2 kB
├ ○ /404                                     2.14 kB        86.8 kB
├ ○ /about                                   3.53 kB        92.6 kB
├ λ /api/github                              0 B            74.2 kB
├ λ /api/top-artists                         0 B            74.2 kB
├ λ /api/top-tracks                          0 B            74.2 kB
├ λ /api/unsplash                            0 B            74.2 kB
├ ● /blog                                    2.47 kB        90.4 kB
├ ● /blog/[slug]                             5.92 kB        90.6 kB
├   ├ /blog/display-previous-months-js
├   ├ /blog/fix-deleted-gatsby-post-showing
├   ├ /blog/global-vs-local-packages
├   └ [+6 more paths]
└ ○ /stats                                   2.69 kB        91.8 kB
```

## Getting Started

Clone the project

```bash
git clone https://github.com/0xhjohnson/0xhjohnson.com.git
```

Go to project directory
```bash
cd 0xhjohnson.com
```

Install dependencies
```bash
yarn
```

Start the dev server
```bash
yarn dev
```

Create a `.env` file using `.env.example` as a template. If you don't care about your [Spotify](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow), [Unsplash](https://unsplash.com/documentation#creating-a-developer-account), or [GitHub](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) stats feel free to global search and remove. Same thing for [Cloudflare analytics](https://www.cloudflare.com/web-analytics/).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing files within `/src`. The page auto-updates as you edit files thanks to [Fast Refresh](https://nextjs.org/docs/basic-features/fast-refresh).

## Built using
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [MDX](https://github.com/mdx-js/mdx)

## License

[MIT](https://choosealicense.com/licenses/mit/) except for the posts themselves which are all rights reserved.