import React from "react";
import { Loading } from "./Loading";

export const Person = ({ person }) => {
  return person != null ? (
    <ul>
      <li>First Name:{person.firstName ? person.firstName : "--"}</li>
      <li>Last Name:{person.lastName ? person.lastName : "--"}</li>
      <li>Email:{person.email ? person.email : "--"}</li>
    </ul>
  ) : (
    //<Loading data-testid="loading" />
    // <div data-testid="empty"></div>
    <h3>Loading...</h3>
  );
};
export default Person;
