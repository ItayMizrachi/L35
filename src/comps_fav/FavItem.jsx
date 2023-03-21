import React, { useContext } from "react";
import { MyContext } from "../context/myContext";

export default function FavItem(props) {
  const item = props.item;
  const { delFav } = useContext(MyContext);
  return (
    <div className="col-md-7 border p-1 d-flex justify-content-between my-1">
      <a href={item.link} target="_blank">
        {item.name} - {item.subject}
      </a>
      <button onClick={() => delFav(item.id)} className="ms-2 bg-danger">
        X
      </button>
    </div>
  );
}
