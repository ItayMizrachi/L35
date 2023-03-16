import React, { useContext } from "react";
import { MyContext } from "../context/myContext";
import CounterChild from "./CounterChild";

export default function CounterParent() {
  const { counter } = useContext(MyContext);
  return (
    <div className="container mt-5">
      <h2>Counter: {counter}</h2>
      <CounterChild />
    </div>
  );
}
