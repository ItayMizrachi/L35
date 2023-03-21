import React, { useContext } from "react";
import { MyContext } from "../context/myContext";

export default function Home() {
  const { setCounter } = useContext(MyContext);
  return (
    <div className="container">
      <h2>Home</h2>
      <button
        onClick={(counter) => setCounter(counter + 100)}
        className="btn btn-info"
      >
        Add 100 to Counter
      </button>
    </div>
  );
}
