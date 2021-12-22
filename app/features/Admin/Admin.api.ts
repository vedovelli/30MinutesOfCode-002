import { Course } from "@prisma/client";
import { Validator } from "~/util";
import { db } from "~/utils/db.server";

export async function getCourses(): Promise<Course[]> {
  return await db.course.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export async function createCourse(data): Promise<Course> {
  return db.course.create({
    data: Validator.parse(data),
  });
}
