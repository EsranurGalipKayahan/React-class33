import React from "react";

export const CityItem = ({ key, city }) => {
  const getCelcius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };
  return (
    <li>
      <div className="city-box">
        <span className="city-header">
          {city.name}, {city.sys.country}
        </span>

       <div className="weather">
        <span className="weather-header">{city.weather[0].main}</span>
        <span>{city.weather[0].description}</span>
        </div> 
        <span>min temp : {getCelcius(city.main.temp_min)}</span>
        <span>min temp : {getCelcius(city.main.temp_max)}</span>
        <span>
          location : {city.coord.lat} , {city.coord.lon}
        </span>
      </div>
    </li>
  );
};
