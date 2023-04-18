import React from "react";
import { Link } from "react-router-dom";

export default function VideoItem(props) {
  const item = props.item;
  return (
    <div className="col-md-3">
      <Link to={"/video/" + item._id}>
        <div className="video_item_box shadow rounded-3">
          <div
            className="video_img"
            style={{
              minHeight: "140px",
              backgroundImage: `url(${item.img_url})`,
            }}
          ></div>
          <h4 className="h5 p-2 text-center">{item.title}</h4>
        </div>
      </Link>
    </div>
  );
}
