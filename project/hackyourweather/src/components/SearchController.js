import React, { useContext, useState } from "react";
import { CityItem } from "./CityItem";
import { SearchItem } from "./SearchItem";
import "../App.css";
import Message from "./Message";
import { API_URL, MSG_TYPES, SCSS_CODE, QRY_PARAMS } from "../constants.js";
import { CityContext } from "./CityContext";
import Loader from "react-loader-spinner";

export const SearchController = () => {
  const [city, setCity] = useState("");
  const { addCity } = useContext(CityContext);
  const [cityInfo, setCityInfo] = useState(undefined);
  const [fetchingError, setFetchingError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const searchHandler = async () => {
    if (city.length >= 1) {
      setIsValid(true);
      setIsLoading(true);
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
        setIsLoading(false);
        setFetchingError(false);
      } catch (err) {
        setFetchingError(true);
        setIsLoading(false);
      }
    } else {
      setFetchingError(false);
      setIsValid(false);
      setCityInfo("");
      setNotFound(false);
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchItem
        cityHandler={(e) => setCity(e.target.value)}
        searchHandler={searchHandler}
      />
      {(notFound || fetchingError || !isValid) === true && (
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
      {isLoading && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
    </>
  );
};
export default SearchController;
