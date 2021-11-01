import React from "react";
import { CityItem } from "./CityItem";

export const CityList = ({ cities }) => {
  return (
    <ul className="container">
      {cities.map((city) => {
        return <CityItem key={city.id} city={city} />;
      })}
    </ul>
  );
};
