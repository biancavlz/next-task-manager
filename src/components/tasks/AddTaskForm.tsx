"use client";

import { useActionState } from "react";
import { createTask, type CreateTaskState } from "./actions";

const initialState: CreateTaskState = {
  success: false,
  errors: {},
};

function AddTaskForm() {
  const [state, formAction, isPending] = useActionState(
    createTask,
    initialState,
  );

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="title">New task</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="e.g. Learn Next.js"
          disabled={isPending}
          className="rounded border border-gray-300 px-2 py-1"
        />
      </div>
      {state.errors?.title && <p role="alert">{state.errors.title[0]}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-blue-600 px-3 py-1 text-white disabled:opacity-50"
      >
        {isPending ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}

export default AddTaskForm;
