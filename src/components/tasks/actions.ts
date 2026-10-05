"use server";

import { revalidatePath } from "next/cache";
import {
  createTask as createTaskService,
  toggleTask as toggleTaskService,
} from "@/services/taskService";
import { createTaskSchema, taskIdSchema } from "@/lib/validation/task";
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

export async function toggleTask(id: string) {
  const result = taskIdSchema.safeParse({ id });

  if (!result.success) {
    throw new Error("Invalid task ID");
  }

  await toggleTaskService(result.data.id);

  revalidatePath("/tasks");
}
