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
          className="navbar-toggler btn btn-light bg-primary"
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
              <Link to="/tv" className="nav-link" style={{ color: "#ececf1" }}>
                <strong>Tv</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-link"
                style={{ color: "#ececf1" }}
              >
                <strong>Sign Up</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/toys"
                className="nav-link"
                style={{ color: "#ececf1" }}
              >
                <strong>Form Toys</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/counter"
                className="nav-link"
                style={{ color: "#ececf1" }}
              >
                <strong>Counter</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/todo"
                className="nav-link"
                style={{ color: "#ececf1" }}
              >
                <strong>To Do</strong>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
