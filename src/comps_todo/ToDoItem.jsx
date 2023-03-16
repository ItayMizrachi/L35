import React, { useContext } from "react";
import { MyContext } from "../context/myContext";

export default function TodoItem(props) {
  const item = props.item;
  const { deletTodoSingle } = useContext(MyContext);

  return (
    <div className="col-md-7 border p-2">
      <button
        onClick={() => {
          deletTodoSingle(item.id);
        }}
        className="bg-danger btn float-end"
      >
        X
      </button>
      <h3>
        {item.name} - {item.time}
      </h3>
    </div>
  );
}
