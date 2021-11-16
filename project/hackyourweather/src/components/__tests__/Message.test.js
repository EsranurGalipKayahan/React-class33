import { render } from "@testing-library/react";
import { MESSAGES } from "../../constants.js";

import Message from "../Message";

test("renders nothing if no props", () => {
  const { getByRole } = render(<Message />);
  const msgEl = getByRole("heading");
  expect(msgEl).toBeInTheDocument();
  expect(msgEl).toHaveTextContent("");
});

test("renders message if user does invalid search", () => {
  const type = "invalidSearch";
  const { getByText } = render(<Message type={type} />);
  const msgEl = getByText(MESSAGES.invalidSearch);

  expect(msgEl).toBeInTheDocument();
});
test("renders message if user enters invalid city", () => {
  const type = "cityIsNotFound";
  const { getByText } = render(<Message type={type} />);
  const msgEl = getByText(MESSAGES.cityIsNotFound);

  expect(msgEl).toBeInTheDocument();
});
test("renders message if an error occurs in the server", () => {
  const type = "fetchingError";
  const { getByText } = render(<Message type={type} />);
  const msgEl = getByText(MESSAGES.fetchingError);

  expect(msgEl).toBeInTheDocument();
});
