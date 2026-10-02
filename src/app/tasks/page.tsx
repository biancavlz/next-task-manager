import AddTaskForm from "@/components/tasks/AddTaskForm";
import TaskList from "@/components/tasks/TaskList";
import { tasks } from "@/lib/tasks";

function TaskPage() {
  return (
    <main>
      <h1>Tasks</h1>
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default TaskPage;
