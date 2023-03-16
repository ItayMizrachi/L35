import React, { useContext } from "react";
import { MyContext } from "../context/myContext";

export default function Home() {
  const { counter } = useContext(MyContext);
  return (
    <div className="container">
      <h2>Home - {counter}</h2>
    </div>
  );
}
