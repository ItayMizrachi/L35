import { sortBy } from "lodash";
import React, { useContext } from "react";
import { MyContext } from "../context/myContext";
import FavItem from "./FavItem";

export default function FavList() {
  const { favs_ar } = useContext(MyContext);

  const sort_ar = sortBy(favs_ar, "subject");

  return (
    <div className="container">
      <h2>Links you added in the past</h2>
      <div className="row">
        {sort_ar.map((item) => (
          <FavItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
