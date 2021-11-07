import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SearchItem from "../SearchItem";

/*test("renders error if the city information is null", () => {
  let value = null;
  const { getByText } = render(<SearchItem city={value} />);
  const errorEl = getByText("Bad Request");
  expect(errorEl).toBeInTheDocument();
});*/
test("renders all elements correctly if no props", () => {
  const { getByTestId, getByRole } = render(<SearchItem />);
  const search_containerEl = getByTestId("search-container");
  const search_boxEl = getByTestId("search-box");
  const search_btnEl = getByRole("button");
  expect(search_boxEl).toBeInTheDocument();
  expect(search_containerEl).toBeInTheDocument();
  expect(search_btnEl).toBeInTheDocument();
});
/*
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SearchItem from "../SearchItem";

/*test("renders error if the city information is null", () => {
  let value = null;
  const { getByText } = render(<SearchItem city={value} />);
  const errorEl = getByText("Bad Request");
  expect(errorEl).toBeInTheDocument();
});
test("renders error if there is no city", () => {
  const { getByTestId, getByText, queryByTestId, getByRole } = render(
    <SearchItem />
  );
  const search_containerEl = getByTestId("search-container");
  const search_btn = queryByTestId("search-btn");
  const search_box = queryByTestId("search-box");

  fireEvent.change(search_box, {
    target: {
      value: "",
    },
  });
  fireEvent.click(getByRole("button"));
  /*const search_btnEl = (search_containerEl.getElementsByClassName =
    "input-group-text border-0 btn  mb-2 fas fa-search"[0]);
  fireEvent.click(search_btnEl);

  const errorEl = getByText("Bad Request");
  expect(search_containerEl).toBeInTheDocument();
}); */
