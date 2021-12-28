import { Course } from "@prisma/client";
import { FormFields } from "~/routes/admin.courses/new";
import { db } from "~/utils/db.server";

export async function getCourses(): Promise<Course[]> {
  return db.course.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export async function getCourse(id: string): Promise<Course | null> {
  return db.course.findUnique({
    where: {
      id,
    },
  });
}

export async function saveCourse(
  data: FormFields,
  id?: string
): Promise<Course> {
  if (id) {
    return db.course.update({
      where: { id },
      data,
    });
  }

  return db.course.create({
    data,
  });
}

export async function deleteCourse(id: string): Promise<Course> {
  return db.course.delete({ where: { id } });
}
