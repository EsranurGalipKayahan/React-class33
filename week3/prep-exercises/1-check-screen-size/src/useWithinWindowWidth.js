import { useWindowSize } from "./useWindowSize";

export const useWithinWindowWidth = () => {
  const { width } = useWindowSize();
  const isWithin;

  if(width<=699)
  isWithin = {name:"Sara", type:"small"};
  else if(width<=999)
    isWithin={name:"Esra", type:"medium"};
 else isWithin = {name:"Cuma", type:"big"};
  return isWithin;
};
