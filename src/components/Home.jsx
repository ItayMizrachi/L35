import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherList from "./WeatherList";

export default function Home() {
  const [ar, setAr] = useState([]);
  const searchQ = "tel-aviv" || ref.current.value;

  useEffect(() => {
    doApi(searchQ);
  }, []);

  const doApi = async (searchQ) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQ}&appid=a01a81077cd503a806e77c2d7f006510`;
      const response = await axios.get(url);
      const { name, main, weather } = response.data;
      const weatherData = {
        id: Date.now(),
        name: name,
        temperature: main.temp,
        feelsLike: main.feels_like,
        humidity: main.humidity,
        description: weather[0].description,
      };
      setAr([weatherData]);
      console.log(ar);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <WeatherForm doApi={doApi} />
      <h1 className="text-center">Welcome to the Weather App ! </h1>
      <WeatherList ar={ar} />
    </div>
  );
}
