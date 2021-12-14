import invariant from "tiny-invariant";
import { Repo } from ".";

const config = {
  headers: {
    accept: "application/vnd.github.v3+json",
    Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
  },
};

export const getGithubUser = async (username?: string) => {
  invariant(username, "Please provide an username as a string");

  const res = await fetch(`https://api.github.com/users/${username}`, config);

  const { login, avatar_url, html_url, bio } = await res.json();

  return { login, avatar_url, html_url, bio };
};

export const getUserRepos = async (username?: string) => {
  invariant(username, "Please provide an username as a string");

  const res = await fetch(
    `https://api.github.com/users/${username}/repos`,
    config
  );

  return (await res.json()).map(
    ({ id, full_name, stargazers_count, html_url, language, name }: Repo) => ({
      id,
      full_name,
      stargazers_count,
      html_url,
      language,
      name,
    })
  );
};

export const getCommits = async (repoName?: string) => {
  invariant(repoName, "Please provide an repository name as a string");

  const res = await fetch(
    `https://api.github.com/repos/${repoName}/commits`,
    config
  );

  return await res.json();
};
