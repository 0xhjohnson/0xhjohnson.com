import fetch from 'node-fetch';
import qs from 'qs';
import { VercelRequest, VercelResponse } from '@vercel/node';

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (_: VercelRequest, res: VercelResponse) {
  try {
    const params = {
      quantity: 1
    };
    const url = `https://api.unsplash.com/users/0xhjohnson/statistics/?${qs.stringify(
      params
    )}`;

    const stats = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_TOKEN}`
      }
    });
    const { downloads, views } = await stats.json();

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.json({
      downloads: downloads.total,
      views: views.total
    });
  } catch (e) {
    console.error(`Failed to fetch unsplash stats from api: ${e}`);
  }
}
