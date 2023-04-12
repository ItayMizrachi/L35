import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOKEN_KEY } from "../services/apiService";

export default function HeaderAdmin() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const nav = useNavigate();

  const onLogOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    nav("/admin");
    toast.info("You Logged Out, See You Soon.. :)");
  };

  return (
    <header
      className=" shadow-shadow p-3  bg-warning"
      style={{ position: "sticky", top: 0, zIndex: 9 }}
    >
      <nav className="container navbar navbar-expand-lg navbar-light">
        <Link to="/admin" className="nav-link" style={{ color: "#ececf1" }}>
          <strong>Admin Login</strong>
        </Link>
        <button
          className="navbar-toggler btn btn-light bg-info"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={navbarOpen}
          aria-label="Toggle navigation"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}
          id="navbarNav"
        >
          {localStorage[TOKEN_KEY] && (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="categories"
                  className="nav-link"
                  style={{ color: "#ececf1" }}
                >
                  <strong>Categories</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="videos"
                  className="nav-link"
                  style={{ color: "#ececf1" }}
                >
                  <strong>Videos</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="users"
                  className="nav-link"
                  style={{ color: "#ececf1" }}
                >
                  <strong>Users</strong>
                </Link>
              </li>
            </ul>
          )}
          <div>
            {localStorage[TOKEN_KEY] && (
              <button onClick={onLogOut} className="btn btn-danger">
                Log out
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
