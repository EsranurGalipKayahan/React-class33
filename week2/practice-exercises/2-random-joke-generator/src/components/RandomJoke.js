import React, { useEffect, useState } from "react";

export const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  useEffect(() => {
    const getJoke = () => {
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);
  return <div></div>;
};
