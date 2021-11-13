import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = "display: block;margin: 0 auto;border-color: red;";
export const Loading = () => {
  return (
    <div>
      <ClipLoader color="#ffffff" loading="true" css={override} size={150} />
    </div>
  );
};
