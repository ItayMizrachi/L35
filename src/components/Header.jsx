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
              <Link to="/" className="nav-link" style={{ color: "#ececf1" }}>
                <strong>Page 2</strong>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
