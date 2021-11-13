import React from "react";
import { Person } from "./Person";
import { useState, useEffect } from "react";

export const PersonController = () => {
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(false);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();

      const { name, email } = data.results[0];

      //    setTimeout(() => {
      setPerson({
        firstName: name.first,
        lastName: name.last,
        email: email,
      });
      //  }, 3000);
    } catch (err) {
      setError(true);
    }
  };
  useEffect(() => {
    getPerson();
  }, []);
  return error ? (
    <h2>Error while fetching data</h2>
  ) : (
    person && <Person person={person} />
  );
};
export default PersonController;
