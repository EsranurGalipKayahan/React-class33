import { render, screen } from "../test-utils";
import { getCelcius } from "../../utilsFunc.js";
import { CityProvider } from "../CityContext.js";
import CityItem from "../CityItem";
import React from "react";
import { fireEvent } from "@testing-library/dom";
import { MSG_TYPES } from "../../constants";

const cityInfo = {
  coord: { lon: 151.22, lat: -33.85 },
  weather: [
    {
      main: "Clouds",
      description: "scattered clouds",
    },
  ],
  main: {
    temp_min: 289.82,
    temp_max: 293.15,
  },

  sys: {
    country: "AU",
  },
  id: 2147714,
  name: "Sydney",
  cod: 200,
};

const setCities = jest.fn(() => {});
const cities = [];

test("renders correctly with delete button if the city information is correct", () => {
  const { container } = render(
    <CityProvider value={{ cities, setCities }}>
      <CityItem city={cityInfo} />
    </CityProvider>
  );
  const elements = container.querySelectorAll("span");
  const deleteBtnEl = container.querySelector("button");
  expect(elements.length).toBe(6);
  expect(elements[0].textContent).toBe(
    `${cityInfo.name}, ${cityInfo.sys.country}`
  );
  expect(elements[1].textContent).toBe(cityInfo.weather[0].main);
  expect(elements[2].textContent).toBe(cityInfo.weather[0].description);
  expect(elements[3].textContent).toBe(
    `min temp : ${getCelcius(cityInfo.main.temp_min)}`
  );
  expect(elements[4].textContent).toBe(
    `max temp : ${getCelcius(cityInfo.main.temp_max)}`
  );
  expect(elements[5].textContent).toBe(
    `location : ${cityInfo.coord.lat} , ${cityInfo.coord.lon}`
  );
  expect(deleteBtnEl).toBeInTheDocument();
});
test("delete button deletes the city", () => {
  const { container } = render(
    <CityProvider value={{ cities, setCities }}>
      <CityItem city={cityInfo} />
    </CityProvider>
  );
  const deleteBtnEl = container.querySelector("button");

  fireEvent.click(deleteBtnEl);
  screen.findByText(MSG_TYPES.NO_DATA);
});
