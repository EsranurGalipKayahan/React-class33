import React from "react";
import { SCSS_CODE } from "../constants.js";
import { getCelcius } from "../utilsFunc.js";

export const CityItem = ({ city }) => {
  return (
    city.cod === SCSS_CODE && (
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
          <span>max temp : {getCelcius(city.main.temp_max)}</span>
          <span>
            location : {city.coord.lat} , {city.coord.lon}
          </span>
        </div>
      </li>
    )
  );
};
export default CityItem;
