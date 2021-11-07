import { render } from "@testing-library/react";

import Person from "../Person";

test("renders loading if the person is null", () => {
  let value = null;
  const { container, getByText } = render(<Person person={value} />);
  //expect(container).toBeEmptyDOMElement();
  const loadingEl = getByText("Loading...");
  expect(loadingEl).toBeInTheDocument();
});
test("renders loading if there is no props", () => {
  const { getByText } = render(<Person />);
  const loadingEl = getByText("Loading...");
  expect(loadingEl).toBeInTheDocument();
});
test("renders correctly if the person is not null", () => {
  const person = {
    firstName: "Esranur",
    lastName: "Galip",
    email: "esranurgalip@gmail.com",
  };
  const { container } = render(<Person person={person} />);
  const elements = container.querySelectorAll("li");
  expect(elements.length).toBe(3);
  expect(elements[0].textContent).toBe("First Name:Esranur");
  expect(elements[1].textContent).toBe("Last Name:Galip");
  expect(elements[2].textContent).toBe("Email:esranurgalip@gmail.com");
});
test("renders -- if the email is missing", () => {
  const person = {
    firstName: "Esranur",
    lastName: "Galip",
  };
  const { container } = render(<Person person={person} />);
  const elements = container.querySelectorAll("li");
  expect(elements.length).toBe(3);
  expect(elements[0].textContent).toBe("First Name:Esranur");
  expect(elements[1].textContent).toBe("Last Name:Galip");
  expect(elements[2].textContent).toBe("Email:--");
});
test("renders -- if the firstName is missing", () => {
  const person = {
    lastName: "Galip",
    email: "esranurgalip@gmail.com",
  };
  const { container } = render(<Person person={person} />);
  const elements = container.querySelectorAll("li");
  expect(elements.length).toBe(3);
  expect(elements[0].textContent).toBe("First Name:--");
  expect(elements[1].textContent).toBe("Last Name:Galip");
  expect(elements[2].textContent).toBe("Email:esranurgalip@gmail.com");
});
test("renders -- if the lastName is missing", () => {
  const person = {
    firstName: "Esranur",
    email: "esranurgalip@gmail.com",
  };
  const { container } = render(<Person person={person} />);
  const elements = container.querySelectorAll("li");
  expect(elements.length).toBe(3);
  expect(elements[0].textContent).toBe("First Name:Esranur");
  expect(elements[1].textContent).toBe("Last Name:--");
  expect(elements[2].textContent).toBe("Email:esranurgalip@gmail.com");
});
