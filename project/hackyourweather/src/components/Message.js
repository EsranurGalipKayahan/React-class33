import React from "react";
import { MESSAGES } from "../constants.js";

export const Message = ({ type }) => {
  return <h3>{MESSAGES[type]}</h3>;
};
export default Message;
