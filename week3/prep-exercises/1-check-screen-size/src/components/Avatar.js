import React from "react";
import { BigHead } from "@bigheads/core";
import { AVATAR_TYPES } from "../data";

export const Avatar = ({ name, attrList }) => {
  return (
    <BigHead
      accessory={attrList.accessory}
      body="chest"
      clothing={attrList.clothing}
      clothingColor={attrList.clothingColor}
      eyebrows={AVATAR_TYPES[name].eyebrows}
      eyes={AVATAR_TYPES[name].eyes}
      facialHair={AVATAR_TYPES[name].facialHair}
      graphic={attrList.graphic}
      hair={AVATAR_TYPES[name].hair}
      hairColor={AVATAR_TYPES[name].hairColor}
      hat={attrList.hat}
      hatColor={attrList.hatColor}
      lipColor={AVATAR_TYPES[name].lipColor}
      mouth={AVATAR_TYPES[name].mouth}
      skinTone={AVATAR_TYPES[name].skinTone}
    />
  );
};
