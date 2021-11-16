import React, { useContext, useState } from "react";
import { CityItem } from "./CityItem";
import { SearchItem } from "./SearchItem";
import "../App.css";
import Message from "./Message";
import { API_URL, MSG_TYPES, SCSS_CODE, QRY_PARAMS } from "../constants.js";
import { CityContext } from "./CityContext";

export const SearchController = () => {
  const [city, setCity] = useState("");
  const { addCity } = useContext(CityContext);
  const [cityInfo, setCityInfo] = useState(undefined);
  const [fetchingError, setFetchingError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const searchHandler = async () => {
    if (city.length >= 1) {
      setIsInvalid(false);
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
          addCity(data);
        }
        setFetchingError(false);
      } catch (err) {
        setFetchingError(true);
      }
    } else {
      setFetchingError(false);
      setIsInvalid(true);
      setCityInfo("");
      setNotFound(false);
    }
  };

  return (
    <>
      <SearchItem
        cityHandler={(e) => setCity(e.target.value)}
        searchHandler={searchHandler}
      />
      {(notFound || fetchingError || isInvalid) === true && (
        <Message
          type={
            notFound
              ? MSG_TYPES.NOT_FOUND
              : fetchingError
              ? MSG_TYPES.FETCH_ERROR
              : MSG_TYPES.INVALID_SEARCH
          }
        />
      )}
      {cityInfo && <CityItem city={cityInfo} />}
    </>
  );
};
export default SearchController;
