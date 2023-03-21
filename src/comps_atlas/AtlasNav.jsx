import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AtlasNav() {
  const searchRef = useRef();
  const nav = useNavigate();

  return (
    <nav className="container-fluid py-4">
      <div className="container">
        <div className="col-md-4 d-flex mx-auto">
          <input
            ref={searchRef}
            placeholder="search for country..."
            type="search"
            className="form-control"
          />
          <button
            onClick={() => {
              nav(`/atlas?s=${searchRef.current.value}`);
            }}
            className="btn btn-dark"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
