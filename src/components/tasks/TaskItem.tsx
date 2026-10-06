import { Task } from "@/types/task";
import { TaskToggle } from "./TaskToggle";
import { DeleteTaskButton } from "./DeleteTaskButton";

type TaskItemProps = {
  task: Task;
};

function TaskItem({ task }: TaskItemProps) {
  return (
    <li>
      <TaskToggle id={task.id} completed={task.completed} />
      <span>{task.title}</span>
      <DeleteTaskButton id={task.id} />
    </li>
  );
}

export default TaskItem;
