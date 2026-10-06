"use client";

import { useTransition } from "react";
import { deleteTask } from "./actions";

type DeleteTaskButtonProps = {
  id: string;
};

export function DeleteTaskButton({ id }: DeleteTaskButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      await deleteTask(id);
    });
  }

  return (
    <button type="button" onClick={handleDelete} disabled={isPending}>
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
