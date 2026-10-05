"use server";

import { revalidatePath } from "next/cache";
import { createTask as createTaskService } from "@/services/taskService";
import { createTaskSchema } from "@/lib/validation/task";
import z from "zod";

export type CreateTaskState = {
  success: boolean;
  message?: string;
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

  await createTaskService(result.data.title);

  revalidatePath("/tasks");

  return {
    success: true,
    message: "Task created successfully.",
  };
}
