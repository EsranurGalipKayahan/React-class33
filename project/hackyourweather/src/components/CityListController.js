import React, { useEffect, useState } from "react";
import JSONCities from "../city-weather.json";
import CityList from "./CityList";

export const CityListController = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    setCities(JSONCities);
  });
  return cities.length === 0 ? (
    <h2>There is no cities</h2>
  ) : (
    <CityList cities={cities} />
  );
};
export default CityListController;
