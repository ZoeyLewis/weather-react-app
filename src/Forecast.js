import React from "react";
import "./style/Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="ps-0 col-2" />
        <h1 className="cityName col-4">{props.city}</h1>
        <div className="currentWeather col-6">
          <div id="updated-date">Last updated:</div>
          <div id="today-date">Saturday January 8 2022 11:28</div>
          <div id="today-temp">
            <span id="degrees">{props.temperature}</span>
            <span id="celsius">°C</span>
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="Clear"
              id="today-weather-emoji"
            />
          </div>
          <div id="today-temp-tag">Cloudy with sunny spells</div>
          <div className="humidity">Humidity: {props.humidity}%</div>
          <div className="windSpeed">Wind: {props.windSpeed}m/h</div>
        </div>
      </div>
    </div>
  );
}
