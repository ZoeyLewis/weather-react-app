import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
const iconMapping = {
    "01d": "CLEAR_DAY",
    "02d":"PARTLY_CLOUDY_DAY",
    "03d": "CLOUDY",
    "04d":"PARTLY_CLOUDY_DAY",
    "09d":"RAIN",
    "10d":"RAIN",
    "11d":"SLEET",
    "13d":"SNOW",
    "50d":"FOG",
    "01n":"CLEAR_NIGHT",
    "02n":"PARTLY_CLOUDY_NIGHT",
    "03n":"CLOUDY",
    "04n":"PARTLY_CLOUDY_NIGHT",
    "09n":"RAIN",
    "10n":"RAIN",
    "11n":"SLEET",
    "13n":"SNOW",
    "50n":"FOG"
};

return ( 
    <ReactAnimatedWeather
        icon={iconMapping[props.code]}
        color="#2A2A3B"
        size={64}
        animate={true}
      />
      );
};