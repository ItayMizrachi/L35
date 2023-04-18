import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem(props) {
  const item = props.item;
  return (
    <div className="col-md-4">
      <Link to={"/category/" + item.url_code}>
        <div
          style={{ backgroundImage: `url(${item.img_url})` }}
          className="border category_box d-flex align-items-center justify-content-center"
        >
          <h4>{item.name}</h4>
        </div>
      </Link>
    </div>
  );
}
