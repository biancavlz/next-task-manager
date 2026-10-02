import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Task title is required")
    .max(200, "Task title is too long"),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
