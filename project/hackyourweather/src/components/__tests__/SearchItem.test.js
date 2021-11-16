import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SearchItem from "../SearchItem";

test("renders all elements correctly if no props", () => {
  const { getByTestId, getByRole } = render(<SearchItem />);
  const search_containerEl = getByTestId("search-container");
  const search_boxEl = getByTestId("search-box");
  const search_btnEl = getByRole("button");
  expect(search_boxEl).toBeInTheDocument();
  expect(search_containerEl).toBeInTheDocument();
  expect(search_btnEl).toBeInTheDocument();
});
