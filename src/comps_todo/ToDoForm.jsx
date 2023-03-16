import React, { useContext, useRef } from "react";
import { MyContext } from "../context/myContext";

export default function TodosForm() {
  const { addTodo, resetTodos } = useContext(MyContext);

  const nameRef = useRef();
  const timeRef = useRef();

  const onAddTodo = (e) => {
    e.preventDefault();
    let newItem = {
      name: nameRef.current.value,
      time: timeRef.current.value,
      id: Date.now(),
    };
    console.log(newItem);
    addTodo(newItem);
  };

  return (
    <div className="container">
      <form onSubmit={onAddTodo} className="col-md-6 p-2">
        <label>Name:</label>
        <input ref={nameRef} type="text" className="form-control" />
        <label>Time:</label>
        <input ref={timeRef} type="time" className="form-control" />
        <button className="btn btn-primary mt-3">Add new</button>
        <button
          onClick={resetTodos}
          type="button"
          className="btn btn-danger mt-3 ms-2"
        >
          Reset
        </button>
      </form>
    </div>
  );
}
