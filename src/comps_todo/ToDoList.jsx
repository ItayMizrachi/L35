import React, { useContext } from "react";
import { MyContext } from "../context/myContext";
import TodoItem from "./ToDoItem";

export default function ToDoList() {
  const { todos_ar } = useContext(MyContext);
  return (
    <div className="container">
      <h2>List of tasks you added:</h2>
      <div className="row">
        {todos_ar.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
