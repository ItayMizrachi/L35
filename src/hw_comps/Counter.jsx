import React, { useContext } from "react";
import { MyContext } from "../context/myContext";

export default function Counter() {
  const { counter, setCounter } = useContext(MyContext);
  return (
    <div className="container">
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-info me-2"
      >
        +
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-danger"
      >
        -
      </button>
    </div>
  );
}
