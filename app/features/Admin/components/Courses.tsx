import { Course as CourseType } from "@prisma/client";
import { Link, Outlet } from "remix";
import { Course } from "./Course";

export interface CoursesProps {
  courses: CourseType[];
}

export function Courses({ courses }: CoursesProps) {
  return (
    <div className="container mx-auto pt-8">
      <div className="flex mb-4">
        <h1 className="font-semibold text-2xl text-gray-500 underline mb-5 flex-1">
          Courses
        </h1>
        <div>
          <Link
            to="new"
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Novo
          </Link>
        </div>
      </div>
      <div className="mb-6">
        <Outlet />
      </div>
      <ul className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </ul>
    </div>
  );
}
