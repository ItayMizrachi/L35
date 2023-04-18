import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import PagesBtns from "../../components/PageBtns";
import { API_URL, doApiGet } from "../../services/apiService";

export default function VideosList() {
  const nav = useNavigate();
  const [query] = useSearchParams();
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, [query]);

  const doApi = async () => {
    const page = query.get("page") || 1;
    const url = API_URL + "/videos?page=" + page;
    try {
      const data = await doApiGet(url);
      console.log(data);
      setAr(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = () => {};

  return (
    <div className="container">
      <h1 className="display-4">List of Videos in system</h1>
      <Link className="btn btn-info my-2" to="/admin/videos/add">
        Add new video
      </Link>
      <PagesBtns
        apiUrl={API_URL + "/videos/count"}
        linkTo={"/admin/videos?page="}
        cssClass="btn btn-warning ms-2"
      />
      <table className="table table-striped table-hover table-success">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Info</th>
            <th>Views</th>
            <th>Likes</th>
            <th>Date</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item, i) => {
            const page = query.get("page") || 1;
            return (
              <tr key={item._id}>
                <td>{(page - 1) * 5 + i + 1}</td>
                <td>{item.title}</td>
                <td>{item.category_code}</td>
                <td title={item.info}>
                  {item.info && item.info.substring(0, 15)}...
                </td>
                <td>{item.views}</td>
                <td>{item.likes}</td>
                <td>{item.date_created.substring(0, 10)}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteItem(item._id);
                    }}
                    className="btn bg-danger"
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
