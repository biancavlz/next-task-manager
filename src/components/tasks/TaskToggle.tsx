"use client";

import { useState } from "react";

type TaskToggleProps = {
  completed: boolean;
};

function TaskToggle({ completed }: TaskToggleProps) {
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <button onClick={() => setIsCompleted(!isCompleted)}>
      {isCompleted ? "✅ Completed" : "❌ Open"}
    </button>
  );
}

export default TaskToggle;
