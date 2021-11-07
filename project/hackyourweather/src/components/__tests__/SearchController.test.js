import { rest } from "msw";
import { setupServer } from "msw/node";
import SearchController from "../SearchController";
import { render, screen, fireEvent } from "@testing-library/react";
import { getCelcius } from "../../utilsFunc.js";
import {
  API_URL,
  BAD_RQS_CODE,
  QRY_PARAMS,
  SRV_ERR_CODE,
  TEST,
} from "../../constants.js";

const city = "Sydney";
const results = {
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
// Configures our server for this file
const server = setupServer(
  rest.get(API_URL, (req, res, ctx) => {
    const badReq = req.url.searchParams.get(QRY_PARAMS[0]);
    if (badReq === "") {
      return res(ctx.status(BAD_RQS_CODE), ctx.json({ cod: BAD_RQS_CODE }));
    }
    // response is a function, ctx is our context that is provided. We call json to tell it to convert it to json
    return res(
      ctx.json(
        // the object it should return. Look at what you get back from the API so you know what structure to follow. Remember that we only use 3 fields, so you don't need to copy in the rest

        results
      )
    );
  })
);

// beforeAll takes a function and it will call that function before running the test. The server.listen() means that it will start the server up
beforeAll(() => server.listen());

// afterEach takes a function and it will call that function after every single test. The resetHandlers will make sure that after running a test any changes that were made are reset
afterEach(() => server.resetHandlers());

// afterAll takes a function and it will call that function after all the tests have run. This will stop the server so that it doesn't keep running after the tests are done
afterAll(() => server.close());
test("renders correctly if the city is invalid", async () => {
  const { getByTestId, getByRole } = render(<SearchController />);
  const search_boxEl = getByTestId("search-box");
  const search_btnEl = getByRole("button");
  fireEvent.change(search_boxEl, {
    target: {
      value: "",
    },
  });
  fireEvent.click(search_btnEl);
  await screen.findByText(TEST.notFound);
});
test("renders correctly if fetch returns an json object within weather information", async () => {
  const { getByTestId, getByRole } = render(<SearchController />);

  const search_boxEl = getByTestId("search-box");
  const search_btnEl = getByRole("button");
  fireEvent.change(search_boxEl, {
    target: {
      value: city,
    },
  });
  fireEvent.click(search_btnEl);

  await screen.findByText(`${results.name}, ${results.sys.country}`);
  await screen.findByText(results.weather[0].main);
  await screen.findByText(results.weather[0].description);
  await screen.findByText(`min temp : ${getCelcius(results.main.temp_min)}`);
  await screen.findByText(`max temp : ${getCelcius(results.main.temp_max)}`);
  await screen.findByText(
    `location : ${results.coord.lat} , ${results.coord.lon}`
  );
});
test("handles server error", async () => {
  server.use(
    rest.get(API_URL, (req, res, ctx) => {
      return res(ctx.status(SRV_ERR_CODE));
    })
  );
  const { getByTestId, getByRole } = render(<SearchController />);
  const search_boxEl = getByTestId("search-box");
  const search_btnEl = getByRole("button");
  fireEvent.change(search_boxEl, {
    target: {
      value: city,
    },
  });
  fireEvent.click(search_btnEl);
  await screen.findByText(TEST.fetchingError);
});
