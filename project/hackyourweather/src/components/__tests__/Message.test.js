import { render, screen } from "@testing-library/react";
import { getCelcius } from "../../utilsFunc.js";
import { TEST } from "../../constants.js";

import Message from "../Message";

test("renders nothing if no props", () => {
  const { container } = render(<Message />);
  expect(container).toBeEmptyDOMElement();
});
test("renders nothing if type exists and isEnabled missing", () => {
  const type = "notFound";
  const { container } = render(<Message type={type} />);
  expect(container).toBeEmptyDOMElement();
});
test("renders nothing if isEnabled exists and type missing", () => {
  const { container } = render(<Message isEnabled={true} />);
  expect(container.textContent).toBe("");
});
test("renders message if props are valid", () => {
  const type = "notFound";
  const { getByText } = render(<Message type={type} isEnabled={true} />);
  const msgEl = getByText(TEST.notFound);

  expect(msgEl).toBeInTheDocument();
});
