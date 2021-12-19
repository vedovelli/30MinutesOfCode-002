import { Course } from "@prisma/client";
import { date } from "~/util";

export interface CourseProps {
  course: Course;
}

export function Course({ course }: CourseProps) {
  return (
    <li className="p-4 border-2 border-gray-500 rounded-md shadow-md hover:shadow-none cursor-pointer hover:-translate-y-1 hover:bg-slate-100">
      <h3 className="text-lg text-slate-500 font-semibold mb-2">
        {course.name}
      </h3>
      <p className="text-right text-sm  text-gray-400">
        {date(course.updatedAt)}
      </p>
    </li>
  );
}
