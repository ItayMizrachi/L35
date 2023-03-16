import axios from "axios";
import React, { useEffect, useState } from "react";
import TvItem from "../comps_tv/TvItem";

export default function TvPage() {
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = "http://fs1.co.il/bus/tv.php";
    const resp = await axios.get(url);
    console.log(resp.data);
    setAr(resp.data);
  };

  return (
    <div className="container">
      <h1 className="display-4">Tv Show List</h1>
      <div className="row">
        {ar.map((item, i) => {
          return <TvItem key={item.name} item={item} index={i} />;
        })}
      </div>
    </div>
  );
}
