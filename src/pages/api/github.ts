import fetch from 'node-fetch';
import { NowRequest, NowResponse } from '@vercel/node';
import { Endpoints } from '@octokit/types';
import { filter, propEq, reduce, pathOr } from 'ramda';

type usersReposResponse = Endpoints['GET /users/{username}/repos']['response'];

export default async function (req: NowRequest, res: NowResponse) {
  try {
    // auth headers shared between requests
    const headers = {
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
    };

    const userRes = await fetch('https://api.github.com/users/0xhjohnson', {
      headers
    });
    const user = await userRes.json();

    const reposRes = await fetch(
      'https://api.github.com/users/0xhjohnson/repos',
      {
        headers
      }
    );
    const repos = await reposRes.json();
    const myRepos = filter(propEq('fork', false), repos);

    const starsReducer = (acc: number, curr: usersReposResponse['data']) => {
      return acc + pathOr(0, ['stargazers_count'], curr);
    };
    const stars = reduce(starsReducer, 0, myRepos);

    res.setHeader('Cache-Control', 's-max-age=360, stale-while-revalidate');
    return res.json({
      followers: user.followers,
      stars
    });
  } catch (e) {
    console.error(`Failed to fetch github stats from api: ${e}`);
  }
}
