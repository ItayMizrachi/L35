import React from "react";
import { Link } from "react-router-dom";

export default function TvItem(props) {
  const item = props.item;
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={"/images/" + item.image}
          className="card-img-top"
          alt={item.name}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            Views: {item.views} | Type: {item.kind}
          </p>
          <Link to={`/tv/${props.index}`}>
            <button className="btn btn-primary">More Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
