import React, { useState } from "react";
import { CityItem } from "./CityItem";


export const CityList = ({ cities }) => {
  return cities ? (
    <ul className="container">
      {cities.map((city) => {
        return <CityItem key={city.id} city={city} />;
      })}
    </ul>
  ) : (
    <h2>Error</h2>
  );
};
export default CityList;
