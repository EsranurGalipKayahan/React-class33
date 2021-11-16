import React, { useContext } from "react";
import CityList from "./CityList";
import { CityContext } from "./CityContext";
import { MSG_TYPES } from "../constants";

export const CityListController = () => {
  const { cities } = useContext(CityContext);

  return cities.length === 0 ? (
    <h2>{MSG_TYPES.NO_DATA}</h2>
  ) : (
    <CityList cities={cities} />
  );
};
export default CityListController;
