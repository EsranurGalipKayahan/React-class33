import React, { useContext } from "react";
import { SCSS_CODE } from "../constants.js";
import { getCelcius } from "../utilsFunc.js";
import { Link } from "react-router-dom";
import { CityContext } from "./CityContext.js";

export const CityItem = ({ city }) => {
  const { deleteCity } = useContext(CityContext);
  return (
    city.cod === SCSS_CODE && (
      <li>
        <Link to={`/${city.id}`} key={city.id}>
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
        </Link>
        <button className="delete-btn" onClick={() => deleteCity(city.id)}>
          x
        </button>
      </li>
    )
  );
};
export default CityItem;
