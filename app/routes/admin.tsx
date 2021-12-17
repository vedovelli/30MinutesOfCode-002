import { Course } from "@prisma/client";
import { LoaderFunction, useLoaderData } from "remix";
import { getCourses } from "~/features/Admin/Admin.api";

interface LoaderData {
  courses: Course[];
}

export const loader: LoaderFunction = async ({ params }) => {
  return {
    courses: await getCourses(),
  };
};

export default function () {
  const { courses } = useLoaderData<LoaderData>();

  return (
    <>
      <h1>Curses</h1>
      {courses.map((course) => (
        <p key={course.id}>{course.name}</p>
      ))}
    </>
  );
}

export const ErrorBoundary = () => <h3>Whoops!</h3>;

export const CatchBoundary = () => <h3>Not found!</h3>;

// export const action: ActionFunction = async ({ request, params }) => {
//   return {};
// };
