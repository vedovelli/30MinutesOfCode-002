import { ActionFunction, redirect, useActionData } from "remix";
import { ZodError } from "zod";
import { extractValidationErrors, Validator } from "~/util";
import { CourseForm } from "~/features/Admin/components/CourseForm";
import { AdminApi } from "~/features/Admin";

export interface FormFields {
  name: string;
  description: string;
}

export interface ActionData {
  formErrors?: Partial<FormFields>;
  formValues?: FormFields;
}

export const action: ActionFunction = async ({
  request,
}): Promise<ActionData | Response | void> => {
  const data = Object.fromEntries(await request.formData());

  try {
    await AdminApi.saveCourse(Validator.parse(data));

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
  const actionData = useActionData<ActionData>();
  return <CourseForm actionData={actionData} />;
}
