import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header
      className=" shadow-shadow p-3  bg-dark"
      style={{ position: "sticky", top: 0, zIndex: 9 }}
    >
      <nav className="container navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand" style={{ color: "#ececf1" }}>
          <strong>Home</strong>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="page-2"
                className="nav-link"
                style={{ color: "#ececf1" }}
              >
                <strong>Page 2</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="father"
                className="nav-link"
                style={{ color: "#ececf1" }}
              >
                <strong>Father</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="father/son"
                className="nav-link"
                style={{ color: "#ececf1" }}
              >
                <strong>father/son</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="father/another-son"
                className="nav-link"
                style={{ color: "#ececf1" }}
              >
                <strong>father/another-son</strong>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
