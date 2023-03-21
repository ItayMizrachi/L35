import React, { useRef, useState } from "react";
import { useLocalJson } from "../hooks/useLocalJson";
import { useNum } from "../hooks/useNum";
import { useTime } from "../hooks/useTime";

export default function NumbersHookPage() {
  const inputRef = useRef();
  const { getDate } = useTime();
  const { getLocal, saveLocal } = useLocalJson("friends");
  const { num, add1Num, minus1Num, resetNum } = useNum(88);
  const { list_ar, setListAr } = useState(
    getLocal() || [
      {
        name: "koko akof",
        id: 1,
      },
    ]
  );

  const onSub = (e) => {
    e.preventDefault();
    let item = { name: inputRef.current.value, id: Date.now() };
    setListAr([item, ...list_ar]);
    saveLocal([item, ...list_ar]);
  };

  return (
    <div className="container">
      <h2>Date: {getDate()}</h2>
      <h2>Num: {num}</h2>
      <button onClick={add1Num} className="btn">
        Add 1
      </button>
      <button onClick={minus1Num} className="btn">
        Minus 1
      </button>
      <button onClick={resetNum} className="btn">
        Reset
      </button>

      <hr />

      <form onSubmit={onSub}>
        <h2>Add new friend list: </h2>
        <label>Name of friend: </label>
        <input
          ref={inputRef}
          type="text"
          placeholder="itay.."
          className="form-control"
        />
        <button className="btn btn-info">Add new</button>
      </form>

      <h2>List of friends you added:</h2>
      <ul>
        {list_ar.map((item) => {
          return <li key={item.id} item={item.name}></li>;
        })}
      </ul>
    </div>
  );
}
