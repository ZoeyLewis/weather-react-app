import React from "react";
import "./style/Forecast.css";
import FormattedDate from "./FormattedDate";

export default function Forecast(props) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="ps-0 col-2" />
          <h1 className="cityName col-4 text-uppercase">{props.city}</h1>
          <div className="currentWeather col-6">
            <div id="updated-date">Last updated:</div>
            <div id="today-date"><FormattedDate date={props.data.date}/></div>
            <div id="today-temp">
              <span id="degrees">{props.data.temperature}</span>
              <span id="celsius">°C</span>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="Clear"
                id="today-weather-emoji"
              />
            </div>
            <div id="today-temp-tag" className="text-capitalize">
              {props.data.description}
            </div>
            <div className="humidity">Humidity: {props.data.humidity}%</div>
            <div className="windSpeed">Wind: {props.data.windSpeed}m/h</div>
          </div>
        </div>
      </div>
    );
  }
