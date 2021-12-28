import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useActionData,
  useLoaderData,
} from "remix";
import { ZodError } from "zod";
import { extractValidationErrors, Validator } from "~/util";
import { CourseForm } from "~/features/Admin/components/CourseForm";
import { AdminApi } from "~/features/Admin";
import { Course } from "@prisma/client";
import { Error, NotFound } from "~/components";

export interface LoaderData {
  course: Course;
}

export interface FormFields {
  name: string;
  description: string;
}

export interface ActionData {
  formErrors?: Partial<FormFields>;
  formValues?: FormFields;
}

export const loader: LoaderFunction = async ({
  params,
}): Promise<LoaderData | Response> => {
  const course = await AdminApi.getCourse(params.courseId!);

  if (!course) {
    throw new Response("Not found", {
      status: 404,
    });
  }

  return { course };
};

export const action: ActionFunction = async ({
  request,
  params,
}): Promise<ActionData | Response | void> => {
  const data = Object.fromEntries(await request.formData());

  try {
    await AdminApi.saveCourse(Validator.parse(data), params.courseId);

    return redirect(".");
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        formErrors: extractValidationErrors(error),
        formValues: {
          name: data.name as string,
          description: data.description as string,
        },
      };
    }

    // @ts-ignore
    throw new Error(error.message);
  }
};

export default function () {
  const { course } = useLoaderData<LoaderData>();
  const actionData = useActionData<ActionData>();

  return (
    <>
      <form action={`${course.id}/delete`} method="post">
        <button
          type="submit"
          className="mb-4 bg-red-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Delete
        </button>
      </form>
      <CourseForm actionData={actionData} course={course} />
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return <Error error={error} />;
}

export function CatchBoundary() {
  return <NotFound message="We couldn'd find a course with provided ID" />;
}
