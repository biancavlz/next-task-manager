"use client";

import { useTransition } from "react";
import { toggleTask } from "./actions";

type TaskToggleProps = {
  id: string;
  completed: boolean;
};

export function TaskToggle({ id, completed }: TaskToggleProps) {
  const [isPending, startTransition] = useTransition();

  function handleToggle() {
    startTransition(async () => {
      await toggleTask(id);
    });
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isPending}
      aria-label={
        completed ? "Mark task as incomplete" : "Mark task as complete"
      }
      aria-pressed={completed}
    >
      {isPending ? "..." : completed ? "✓" : "○"}
    </button>
  );
}
