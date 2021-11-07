import React, { useState } from "react";
import { CityItem } from "./CityItem";
import { SearchItem } from "./SearchItem";
import "../App.css";
import Message from "./Message";
import { API_URL, MSG_TYPES, QRY_PARAMS, SCSS_CODE } from "../constants.js";

export const SearchController = () => {
  const [city, setCity] = useState("");
  const [cityInfo, setCityInfo] = useState(undefined);
  const [fetchingError, setFetchingError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const cityHandler = (e) => {
    setNotFound(false);
    setCity(e.target.value);
  };
  const searcHandler = async () => {
    try {
      const url = new URL(API_URL);
      url.searchParams.append(QRY_PARAMS[0], city);
      url.searchParams.append(
        QRY_PARAMS[1],
        process.env.REACT_APP_OPENWEATHERMAP_API_KEY
      );
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod != SCSS_CODE) {
        setCityInfo(""); //undefined
        setNotFound(true);
      } else {
        setNotFound(false);
        setCityInfo(data);
      }
      setFetchingError(false);
    } catch (err) {
      setFetchingError(true);
    }
  };

  return (
    <>
      <SearchItem cityHandler={cityHandler} searcHandler={searcHandler} />
      <Message
        type={notFound ? MSG_TYPES.NOT_FOUND : MSG_TYPES.FETCH_ERROR}
        isEnabled={notFound || fetchingError}
      />
      <CityItem city={cityInfo} />
    </>
  );
};
export default SearchController;
