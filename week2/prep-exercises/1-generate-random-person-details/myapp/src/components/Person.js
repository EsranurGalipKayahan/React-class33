import React from "react";

export const Person = ({ person }) => {
  return (
    <ul>
      <li>First Name:{person.firstName ? person.firstName : "--"}</li>
      <li>Last Name:{person.lastName ? person.lastName : "--"}</li>
      <li>Email:{person.email ? person.email : "--"}</li>
    </ul>
  );
};
export default Person;
