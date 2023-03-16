import React, { useContext } from "react";
import { MyContext } from "../context/myContext";

export default function CounterChild() {
  const { counter, setCounter } = useContext(MyContext);

  return (
    <div className="mt-2">
      <button
        className="btn btn-primary me-2"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add 1
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
