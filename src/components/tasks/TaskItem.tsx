import { Task } from "@/types/task";

type TaskProps = {
  task: Task;
};

function TaskItem({ task }: TaskProps) {
  return (
    <li>
      <span>{task.completed ? "✅" : "❌"}</span>
      <span>{task.title}</span>
    </li>
  );
}

export default TaskItem;
