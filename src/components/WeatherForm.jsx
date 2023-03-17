import React, { useRef } from "react";

export default function WeatherForm(props) {
  const ref = useRef();

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
            <form>
              <div className="input-group">
                <input
                  ref={ref}
                  type="text"
                  className="form-control"
                  placeholder="Enter city name"
                  aria-label="Enter city name"
                  aria-describedby="search-button"
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      props.doApi(ref.current.value);
                    }
                  }}
                />
                <button
                  onClick={() => {
                    props.doApi(ref.current.value);
                  }}
                  className="btn btn-primary"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
