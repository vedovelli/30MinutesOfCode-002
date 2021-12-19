import { Course } from "@prisma/client";
import { db } from "~/utils/db.server";

export async function getCourses(): Promise<Course[]> {
  return await db.course.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
}
