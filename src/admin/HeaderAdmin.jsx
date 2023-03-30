import React from "react";
import { Link } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <header style={{ background: "orange" }} className="container-fluid">
      <div className="container row align-items-center ">
        <div className="logo col-auto">
          <h2 className="h3">Admin</h2>
        </div>
        <nav className="col-auto d-flex">
          <ul>
            <li>
              <Link to="users">Users</Link>
            </li>
            <li>
              <Link to="categories">Categories</Link>
            </li>
            <li>
              <Link to="videos">Videos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
