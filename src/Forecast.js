import React, { useState } from "react";
import "./style/Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [weather, setWeather] = useState({loaded:false});
  function handleResponse(response) {
    setWeather({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
    });
  }
  const apiKey = `39bb51e02e1cb29597d2f2e3f55efcc3`;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  if (weather.loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="ps-0 col-2" />
          <h1 className="cityName col-4">{props.city}</h1>
          <div className="currentWeather col-6">
            <div id="updated-date">Last updated:</div>
            <div id="today-date">Saturday January 8 2022 11:28</div>
            <div id="today-temp">
              <span id="degrees">{weather.temperature}</span>
              <span id="celsius">°C</span>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="Clear"
                id="today-weather-emoji"
              />
            </div>
            <div id="today-temp-tag">{weather.description}</div>
            <div className="humidity">Humidity: {weather.humidity}%</div>
            <div className="windSpeed">Wind: {weather.windSpeed}m/h</div>
          </div>
        </div>
      </div>
    );
  } else {
    return "loading";
  }
}
