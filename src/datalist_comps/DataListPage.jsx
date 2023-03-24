import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DataListPage() {
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = `https://restcountries.com/v3.1/all?fields=name`;
    const response = await axios.get(url);
    console.log(response.data);
    setAr(response.data);
  };

  return (
    <div className="container">
      <div className="d-flex col-md-4">
        <input
          list="my-datalist"
          type="search"
          className="form-control"
          placeholder="Search Country.."
        />
        <button className="btn btn-primary">Search</button>
      </div>
      <datalist id="my-datalist">
        {ar.map((item) => (
          <option key={item.name.common}>{item.name.common}</option>
        ))}
      </datalist>
    </div>
  );
}
