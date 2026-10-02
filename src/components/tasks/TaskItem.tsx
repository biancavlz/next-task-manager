import { Task } from "@/types/task";
import TaskToggle from "./TaskToggle";

type TaskProps = {
  task: Task;
};

function TaskItem({ task }: TaskProps) {
  return (
    <li>
      <TaskToggle completed={task.completed} />
      <span>{task.title}</span>
    </li>
  );
}

export default TaskItem;
