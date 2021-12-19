import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = () => redirect(`/admin/courses`);
