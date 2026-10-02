"use server";

import { createTaskSchema } from "@/lib/validation/task";
import z from "zod";

export type CreateTaskState = {
  success: boolean;
  errors?: { title?: string[] };
};

export async function createTask(
  _prevState: CreateTaskState,
  formdata: FormData,
): Promise<CreateTaskState> {
  const result = createTaskSchema.safeParse({
    title: formdata.get("title"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  console.log("Creating task", result.data.title);

  return {
    success: true,
  };
}
