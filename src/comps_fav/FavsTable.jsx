import React, { useContext } from "react";
import { MyContext } from "../context/myContext";

export default function FavsTable() {
  const { favs_ar, delFav } = useContext(MyContext);

  return (
    <div className="container">
      <h2>Favs table</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Link</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {favs_ar.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.subject}</td>
                <td title={item.link}>
                  <a href={item.link} target="_blank">
                    link
                  </a>
                </td>
                <td>
                  <button
                    onClick={() => {
                      delFav(item.id);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
