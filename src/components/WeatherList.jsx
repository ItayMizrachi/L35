import React from "react";
import WeatherItem from "./WeatherItem";

export default function WeatherList(props) {
  return (
    <div>
      {props.ar.map((item) => {
        return <WeatherItem key={item.id} item={item} />;
      })}
    </div>
  );
}
