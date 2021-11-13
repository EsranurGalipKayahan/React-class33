import React, { useState } from "react";
import { CityItem } from "./CityItem";
import { SearchItem } from "./SearchItem";
import "../App.css";
import Message from "./Message";
import { API_URL, MSG_TYPES, SCSS_CODE, QRY_PARAMS } from "../constants.js";

export const SearchController = () => {
  const [city, setCity] = useState("");
  const [cityInfo, setCityInfo] = useState(undefined);
  const [fetchingError, setFetchingError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const searchHandler = async () => {
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
        setCityInfo("");
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
      <SearchItem
        cityHandler={(e) => setCity(e.target.value)}
        searchHandler={searchHandler}
      />
      {(notFound || fetchingError) === true && (
        <Message
          type={notFound ? MSG_TYPES.NOT_FOUND : MSG_TYPES.FETCH_ERROR}
        />
      )}
      {cityInfo && <CityItem city={cityInfo} />}
    </>
  );
};
export default SearchController;
