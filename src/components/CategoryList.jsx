import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { API_URL, doApiGet } from "../services/apiService";
import VideoItem from "./VideoItem";

export default function CategoryList() {
  const [ar, setAr] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [query] = useSearchParams();

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = API_URL + "/videos/?category=" + params["name"];
    const data = await doApiGet(url);
    console.log(data);
    setAr(data);
  };

  return (
    <div className="container-fluid text-center">
      <div className="container">
        <h1 className="display-3">Videos of category: {params["name"]}</h1>
        <div className="row g-4 justify-content-center">
          {ar.map((item) => {
            return <VideoItem key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
