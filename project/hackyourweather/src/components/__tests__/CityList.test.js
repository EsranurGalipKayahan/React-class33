import { render } from "../test-utils.js";
import { getCelcius } from "../../utilsFunc.js";
import CityList from "../CityList";
import { CityProvider } from "../CityContext";

test("renders correctly if the city information is correct", () => {
  const cityInfo = [
    {
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
    },
  ];
  const setCities = () => jest.fn(() => {});
  const { container } = render(
    <CityProvider value={{ cityInfo, setCities }}>
      <CityList cities={cityInfo} />
    </CityProvider>
  );

  const elements = container.querySelectorAll("span");
  expect(elements.length).toBe(6);
  expect(elements[0].textContent).toBe(
    `${cityInfo[0].name}, ${cityInfo[0].sys.country}`
  );
  expect(elements[1].textContent).toBe(cityInfo[0].weather[0].main);
  expect(elements[2].textContent).toBe(cityInfo[0].weather[0].description);
  expect(elements[3].textContent).toBe(
    `min temp : ${getCelcius(cityInfo[0].main.temp_min)}`
  );
  expect(elements[4].textContent).toBe(
    `max temp : ${getCelcius(cityInfo[0].main.temp_max)}`
  );
  expect(elements[5].textContent).toBe(
    `location : ${cityInfo[0].coord.lat} , ${cityInfo[0].coord.lon}`
  );
});