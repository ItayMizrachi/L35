import React from "react";

export default function WeatherItem(props) {
  const item = props.item;
  const { name, temperature, feelsLike, humidity, description, icon, sys } =
    item;

  const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img src={iconUrl} alt={description} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Temperature: {temperature} &#8451;</p>
            <p className="card-text">Feels like: {feelsLike} &#8451;</p>
            <p className="card-text">Humidity: {humidity}%</p>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
