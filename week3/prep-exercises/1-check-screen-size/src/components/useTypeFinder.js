import { useEffect, useState } from "react";

import { RANDOM_VALUES } from "../data";

import useScreenSize from "./useScreenSize";

export const useTypeFinder = () => {
  const { windowSize } = useScreenSize();
  const [avatarType, setAvatarType] = useState({});
  const [attrList, setAttrList] = useState({});

  const randomValues = () => {
    const list = {};

    for (let key in RANDOM_VALUES) {
      const randomIndex = Math.floor(Math.random() * RANDOM_VALUES[key].length);
      list[key] = RANDOM_VALUES[key][randomIndex];
    }
    setAttrList(list);
  };
  const findScreenType = () => {
    let type = {};
    if (windowSize.width < 700) {
      type = { name: "Sara", icon: "fas fa-mobile-alt", screenType: "small" };
    } else if (windowSize.width < 1000) {
      type = { name: "Esra", icon: "fas fa-tablet-alt", screenType: "medium" };
    } else {
      type = { name: "Cuma", icon: "fas fa-desktop", screenType: "big" };
    }
    setAvatarType(type);
  };
  useEffect(() => {
    findScreenType();
    randomValues();
  }, [windowSize]);
  return { avatarType, attrList };
};
export default useTypeFinder;
