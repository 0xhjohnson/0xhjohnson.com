import { NowRequest, NowResponse } from '@vercel/node';
import { Octokit } from '@octokit/rest';
import * as R from 'remeda';

let octokit: Octokit;

export default async function (req: NowRequest, res: NowResponse) {
  try {
    if (!octokit) {
      octokit = new Octokit({
        auth: process.env.GITHUB_ACCESS_TOKEN
      });
    }

    const { data: user } = await octokit.users.getByUsername({
      username: '0xhjohnson'
    });

    const { data: repos } = await octokit.repos.listForUser({
      username: '0xhjohnson'
    });

    const stars = R.pipe(
      repos,
      R.reduce((acc, curr) => acc + Number(curr['stargazers_count']), 0)
    );

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=1200, stale-while-revalidate=600'
    );

    return res.json({
      followers: user.followers,
      stars
    });
  } catch (e) {
    console.error(`Failed to fetch github stats from api: ${e}`);
  }
}
