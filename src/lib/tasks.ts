import { db } from "@/lib/db";
import type { Task } from "@/types/task";

export async function getTasks(): Promise<Task[]> {
  return db.task.findMany({
    select: { id: true, title: true, completed: true },
    orderBy: { createdAt: "asc" },
  });
}
