import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState({});

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  return { windowSize };
};
export default useScreenSize;
