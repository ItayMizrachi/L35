import React from "react";
import { useSelector } from "react-redux";

export default function LinksList() {
  // :ar -> השם החדש של המשתנה מהדיסטרקשן
  const { links_ar: ar } = useSelector((myStore) => myStore.linksSlice);

  return (
    <div className="container my-2">
      <h3>Links you added:</h3>
      <div className="row p-3">
        {ar.map((item) => {
          return (
            <div className="col-md-7 border p-1 my-1">
              <a target="_blank" href={item.link}>
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
