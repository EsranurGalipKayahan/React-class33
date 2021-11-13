import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = "display: block;margin: 0 auto;border-color: red;";
export const Loading = ({ data_testid }) => {
  return (
    <div data-testid={data_testid}>
      <ClipLoader color="#ffffff" loading="true" css={override} size={150} />
    </div>
  );
};
