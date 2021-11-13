import { render, screen } from "@testing-library/react";
import { MESSAGES } from "../../constants.js";

import Message from "../Message";

test("renders nothing if no props", () => {
  const { getByRole } = render(<Message />);
  const msgEl = getByRole("heading");
  expect(msgEl).toBeInTheDocument();
  expect(msgEl).toHaveTextContent("");
});
test("renders message if props are valid", () => {
  const type = "cityIsNotFound";
  const { getByText } = render(<Message type={type} />);
  const msgEl = getByText(MESSAGES.cityIsNotFound);

  expect(msgEl).toBeInTheDocument();
});
