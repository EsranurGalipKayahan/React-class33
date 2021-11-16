import moment from "moment";
export const getCelcius = (kelvin) => {
  return (kelvin - 273.15).toFixed(2);
};
export const dateFormatter = (item) =>
  moment(item).format("DD-MM-YYYY HH:mm:ss");
