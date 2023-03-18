import React from "react";

export default function WeatherList(props) {
  const item = props.ar;

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img
            width={150}
            src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
            alt={item.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Temperature: {item.main.temp} &#8451;</p>
            <p className="card-text">
              Feels like: {item.main.feels_like} &#8451;
            </p>
            <p className="card-text">Condition: {item.weather[0].main}</p>
            <p className="card-text">Wind: {item.wind.speed} kmh</p>
            <p className="card-text">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
