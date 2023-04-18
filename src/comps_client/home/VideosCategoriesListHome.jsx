import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { API_URL, doApiGet } from "../../services/apiService";
import CategoryItem from "./CategoryItem";

export default function VideosCategoriesListHome() {
  const [ar, setAr] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    try {
      setLoading(true);
      const url = API_URL + "/categories";
      const data = await doApiGet(url);
      console.log(data);
      setAr(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid text-center py-4">
      <div className="container">
        <h2 className="display-3">Categories:</h2>
        <div className="row categories_home g-4 py-4">
          {ar.map((item) => {
            return <CategoryItem key={item._id} item={item} />;
          })}
        </div>
        {loading && <Loading />}
      </div>
    </div>
  );
}
