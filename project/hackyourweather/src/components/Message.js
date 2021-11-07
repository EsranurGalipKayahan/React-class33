import React from "react";
import { TEST } from "../constants.js";

export const Message = ({ type, isEnabled }) => {
  return isEnabled ? <h3>{TEST[type]}</h3> : <></>;
};
export default Message;
