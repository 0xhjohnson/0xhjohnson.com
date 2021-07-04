import { VercelRequest, VercelResponse } from '@vercel/node';
import { Octokit } from '@octokit/rest';
import * as R from 'remeda';

let octokit: Octokit;

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (_: VercelRequest, res: VercelResponse) {
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
