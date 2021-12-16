import { LoaderFunction, redirect } from "remix";
import { users } from "~/features/Github/components/SelectUser";

export const loader: LoaderFunction = () =>
  redirect(`/github/${users[1].username}`);
