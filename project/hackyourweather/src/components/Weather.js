import React from "react";
import CityListController from "./CityListController";
import SearchController from "./SearchController";
import { CityProvider } from "./CityContext";

export const Weather = () => {
  return (
    <div className="App">
      <h1>Weather</h1>
      <CityProvider>
        <SearchController />
        <CityListController />
      </CityProvider>
    </div>
  );
};
