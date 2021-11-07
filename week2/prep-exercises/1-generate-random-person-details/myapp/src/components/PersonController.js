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
      //    setTimeout(() => {
      setPerson({
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        email: data.results[0].email,
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
    <Person person={person} />
  );
};
export default PersonController;
