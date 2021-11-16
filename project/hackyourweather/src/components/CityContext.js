import React, { useState, createContext } from "react";
import JSONCities from "../city-weather.json";

export const CityContext = createContext();

export const CityProvider = (props) => {
  const [cities, setCities] = useState(JSONCities);
  const deleteCity = (id) => {
    setCities(cities.filter((city) => city.id != id));
  };
  const addCity = (city) => {
    const flag = cities.find((item) => item.name == city.name);
    if (!flag) setCities([city, ...cities]);
  };

  return (
    <CityContext.Provider value={{ cities, setCities, addCity, deleteCity }}>
      {props.children}
    </CityContext.Provider>
  );
};
