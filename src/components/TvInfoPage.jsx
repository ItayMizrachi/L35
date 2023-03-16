import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function TvInfoPage(props) {
  const params = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    try {
      const url = "http://fs1.co.il/bus/tv.php";
      const resp = await axios.get(url);
      console.log(resp.data);
      setInfo(resp.data[params["index"]]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {info.name ? (
            <div className="card mt-5">
              <img
                className="card-img-top"
                src={`/images/${info.image}`}
                alt={info.name}
              />
              <div className="card-body">
                <h2 className="card-title">{info.name}</h2>
                <p className="card-text">{info.descrption}</p>
                <p className="card-text">
                  <small className="text-muted">Genere: {info.genere}</small>
                </p>
                <Link to="/tv" className="btn btn-primary">
                  Back to List
                </Link>
              </div>
            </div>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </div>
  );
}
