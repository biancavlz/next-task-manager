import { connection } from "next/server";
import AddTaskForm from "@/components/tasks/AddTaskForm";
import TaskList from "@/components/tasks/TaskList";
import { getTasks } from "@/lib/tasks";

async function TaskPage() {
  await connection();
  const tasks = await getTasks();

  return (
    <main>
      <h1>Tasks</h1>
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default TaskPage;
