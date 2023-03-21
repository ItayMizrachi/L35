import React, { useContext } from "react";
import { MyContext } from "../context/myContext";

export default function Counter() {
  const { counter: coins, setCounter } = useContext(MyContext);
  return (
    <div className="container">
      <h2>Coins: {coins}</h2>
      <button
        onClick={() => setCounter(coins + 1)}
        className="btn btn-info me-2"
      >
        +
      </button>
      <button onClick={() => setCounter(coins - 1)} className="btn btn-danger">
        -
      </button>
    </div>
  );
}
