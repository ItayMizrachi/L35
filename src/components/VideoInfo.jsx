import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, doApiGet } from "../services/apiService";
import Loading from "./Loading";

export default function VideoInfo() {
  const [itemMovie, setItemMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    try {
      setLoading(true);
      const url = API_URL + "/videos/single/" + params["id"];
      const data = await doApiGet(url);
      console.log(data);
      setItemMovie(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieCode = (_urlVideo) => {
    // מחפשים איפה נמצא הוי בקווארי שבתוכו יש את הקוד של הוידאו
    const vIndex = _urlVideo.indexOf("?v=");
    // אוספים רק את הוידיאו קוד
    const videoCode = _urlVideo.substring(vIndex + 3, 99999);
    return videoCode;
  };

  return (
    <div className="container-fluid py-4">
      <div className="container">
        {itemMovie.video_url && (
          <div className="row">
            <div className="col-lg-4">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${getMovieCode(
                  itemMovie.video_url
                )}?controls=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <article className="col-lg-8">
              <div>
                <h2>{itemMovie.title}</h2>
                <p>Info: {itemMovie.info} </p>
                <div>Category: {itemMovie.category_code}</div>
                <div>
                  <a
                    style={{ color: "blue", textDecoration: "underline" }}
                    target="_blank"
                    href={itemMovie.video_url}
                  >
                    Link to movie page
                  </a>
                </div>
              </div>
            </article>
          </div>
        )}
        {loading && <Loading />}
      </div>
    </div>
  );
}
