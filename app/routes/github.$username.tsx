import { LoaderFunction, useLoaderData } from "remix";

export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
}

export interface LoaderData {
  user: User;
}

export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(`https://api.github.com/users/${params.username}`, {
    headers: {
      accept: "application/vnd.github.v3+json",
      Authorization: "token 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",
    },
  });

  return {
    user: await res.json(),
  };
};

export default function () {
  const { user } = useLoaderData<LoaderData>();

  return (
    <>
      <h1>{user.login}</h1>
      <blockquote>{user.bio}</blockquote>
      <img src={user.avatar_url} alt={user.login} width="150" />
    </>
  );
}
