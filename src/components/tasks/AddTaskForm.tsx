"use client";

import { useActionState } from "react";
import { createTask, type CreateTaskState } from "./actions";

const initialState: CreateTaskState = {
  success: false,
  errors: {},
};

function AddTaskForm() {
  const [state, formAction, pending] = useActionState(createTask, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="title">New task</label>
      <input id="title" name="title" type="text" />

      {state.errors?.title && <p>{state.errors.title[0]}</p>}

      <button type="submit" disabled={pending}>
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
