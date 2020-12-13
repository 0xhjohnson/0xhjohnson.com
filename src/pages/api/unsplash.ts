import fetch from 'node-fetch';
import qs from 'qs';
import { NowRequest, NowResponse } from '@vercel/node';

export default async function (req: NowRequest, res: NowResponse) {
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
