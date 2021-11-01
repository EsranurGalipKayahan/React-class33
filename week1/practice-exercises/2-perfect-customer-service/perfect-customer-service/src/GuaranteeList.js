import React from "react";
import { Guarantee } from "./Guarantee";

export const GuaranteeList = ({ images }) => {
  return (
    <ul className="list">
      {images.map((image) => {
        return (
          <Guarantee
            img={image.src}
            title={image.title}
            description={image.description}
          />
        );
      })}
    </ul>
  );
};
