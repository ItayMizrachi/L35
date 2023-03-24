import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL_API } from "../Services/apiSercice";

export default function HumansPage() {
  const nav = useNavigate();
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    // const url = `http://localhost:3001/humans`;
    const url = URL_API + "/humans";
    const response = await axios.get(url);
    console.log(response.data);
    setAr(response.data);
  };

  const onDelClick = async (_idDel) => {
    if (window.confirm("Are you sure you want to delete item?")) {
      try {
        const url = URL_API + "/humans/" + _idDel;
        const resp = await axios({
          url: url,
          method: "DELETE",
          data: {},
        });
        if (resp.data.deletedCount) {
          doApi();
        }
      } catch (err) {
        console.log(err);
        alert("There problem");
      }
    }
  };

  return (
    <div className="container">
      <h1>Humans list:</h1>
      <Link to="add">
        <button className="btn btn-info mb-2">Add new Human</button>
      </Link>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Birth year</th>
            <th>Info</th>
            <th>Del/Edit</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.birth_year}</td>
                <td title={item.info}>{item.info.substring(0, 15)}...</td>
                <td>
                  <button
                    onClick={() => {
                      onDelClick(item._id);
                    }}
                    className="btn btn-danger me-2 mb-md-0 mb-2"
                  >
                    Del
                  </button>
                  <button
                    onClick={() => nav("/humans/edit/" + item._id)}
                    className="btn btn-info"
                  >
                    Edit
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
