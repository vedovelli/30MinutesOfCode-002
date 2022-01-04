import { LoaderFunction, useLoaderData } from "remix";
import { GithubApi, Repositories, Types } from "~/features/Github";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await GithubApi.getUser(params.username),
    repos: await GithubApi.getUserRepos(params.username),
  };
};

export function ErrorBoundary() {
  return <h3>Whoops. Something went wrong [Repositories]</h3>;
}

export default function () {
  const { user, repos } = useLoaderData<Types.Repositories.LoaderData>();
  return <Repositories user={user} repos={repos} />;
}
