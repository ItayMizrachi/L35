import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function WeatherForm(props) {
  const inputRef = useRef();
  const nav = useNavigate();

  return (
    <header className="sticky-top bg-dark py-3">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <h1 className="text-white mb-0">Search City</h1>
            <p className="text-white-50 mb-0">
              Find the weather forecast for any city in the world.
            </p>
          </div>
          <div className="col-md-4">
            <div className="input-group">
              <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Enter city name"
                aria-label="Enter city name"
                aria-describedby="search-button"
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    // props.doApi(inputRef.current.value);
                    nav("/?q=" + inputRef.current.value);
                  }
                }}
              />
              <button
                onClick={() => {
                  // props.doApi(inputRef.current.value);
                  nav("/?q=" + inputRef.current.value);
                }}
                className="btn btn-primary"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
