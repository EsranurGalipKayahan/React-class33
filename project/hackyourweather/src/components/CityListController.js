import React, { useState } from "react";
import JSONCities from "../city-weather.json";
import CityList from "./CityList";


export const CityListController = () => {
  const [cities] = useState(JSONCities);
  return JSONCities ? <CityList cities={cities} /> : <h2>Error</h2>;
};
export default CityListController;
