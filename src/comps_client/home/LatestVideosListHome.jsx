import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import VideoItem from "../../components/VideoItem";
import { API_URL, doApiGet } from "../../services/apiService";

export default function LatestVideosListHome() {
  const [ar, setAr] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    try {
      const url = API_URL + "/videos?perPage=4";
      const data = await doApiGet(url);
      console.log(data);
      setAr(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <h2>New videos in site:</h2>
        <div className="row">
          {ar.map((item) => {
            return <VideoItem key={item._id} item={item} />;
          })}
        </div>
        {loading && <Loading />}
      </div>
    </div>
  );
}
