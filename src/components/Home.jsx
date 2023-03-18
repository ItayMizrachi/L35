import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import WeatherForm from "./WeatherForm";
import WeatherList from "./WeatherList";

export default function Home() {
  const [ar, setAr] = useState({});
  const [query] = useSearchParams();

  useEffect(() => {
    doApi(query.get("q") || "mexico");
  }, [query]);

  const doApi = async (_searchQ) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${_searchQ}&appid=a01a81077cd503a806e77c2d7f006510`;
      const response = await axios.get(url);
      console.log(response.data);
      setAr(response.data);
    } catch (error) {
      console.log("Error fetching weather data:", error);
      alert("City not found");
    }
  };

  return (
    <div>
      <WeatherForm doApi={doApi} />
      <h1 className="text-center py-3 display-5">
        Welcome to the Weather App !{" "}
      </h1>
      {ar.name && <WeatherList ar={ar} />}
    </div>
  );
}
