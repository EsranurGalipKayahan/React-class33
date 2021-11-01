import React from "react";

export const Guarantee = ({ img, title, description }) => {
  return (
    <li className="item">
      <div>
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <p>{description}</p>
      </div>
    </li>
  );
};
