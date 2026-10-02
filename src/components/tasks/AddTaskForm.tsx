"use client";

import { useState, type SubmitEvent } from "react";

function AddTaskForm() {
  const [title, setTitle] = useState("");

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(title);

    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">New task</label>
      <input
        id="title"
        value={title}
        placeholder="Add a task"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
    </form>
  );
}

export default AddTaskForm;
