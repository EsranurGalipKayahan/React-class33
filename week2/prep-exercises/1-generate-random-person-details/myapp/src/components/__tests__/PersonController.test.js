import { rest } from "msw";
import { setupServer } from "msw/node";
import PersonController from "../PersonController";
import { render, screen } from "@testing-library/react";

// Configures our server for this file
const server = setupServer(
  rest.get("https://www.randomuser.me/api", (req, res, ctx) => {
    // This part generates the response whenever our code calls the url
    //results[0].name.first,
    const results = [
      {
        name: { first: "Esranur", last: "Galip" },
        email: "esranurgalip@gmail.com",
      },
    ];
    // response is a function, ctx is our context that is provided. We call json to tell it to convert it to json
    return res(
      ctx.json(
        // the object it should return. Look at what you get back from the API so you know what structure to follow. Remember that we only use 3 fields, so you don't need to copy in the rest
        {
          results,
        }
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

test("renders correctly if fetch returns an json object", async () => {
  render(<PersonController />);
  await screen.findByText("First Name:Esranur");
  await screen.findByText("Last Name:Galip");
  await screen.findByText("Email:esranurgalip@gmail.com");
});
test("handles server error", async () => {
  server.use(
    rest.get("https://www.randomuser.me/api", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<PersonController />);
  await screen.findByText("Error while fetching data");
});
