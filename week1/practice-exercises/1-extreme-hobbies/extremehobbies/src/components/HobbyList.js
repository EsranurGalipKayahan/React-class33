import React, { useState } from "react";
import { Hobby } from "./Hobby";

export const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  const [data, setData] = useState(hobbies);

  return (
    <div>
      {data.map((hobby) => {
        return <Hobby key={hobby.indexOf()} hobby={hobby} />;
      })}
    </div>
  );
};
