import React from "react";
import ToDoForm from "../comps_todo/ToDoForm";
import ToDoList from "../comps_todo/ToDoList";

export default function ToDoPage() {
  return (
    <React.Fragment>
      <ToDoForm />
      <ToDoList />
    </React.Fragment>
  );
}
