import { render, screen } from "@testing-library/react";
import { getCelcius } from "../../utilsFunc.js";

import CityItem from "../CityItem";

test("renders error if there is no props", () => {
  const { container } = render(<CityItem />);
  expect(container).toBeEmptyDOMElement();
});
test("renders correctly if the city information is correct", () => {
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
  const { container } = render(<CityItem city={cityInfo} />);
  const elements = container.querySelectorAll("span");
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
});
