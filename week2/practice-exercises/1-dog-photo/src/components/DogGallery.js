import React, { useState } from "react";
import { Button } from "./Button";
import { DogPhoto } from "./DogPhoto";

export const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogPhotos([...dogPhotos, data.message]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {dogPhotos.length === 0 && (
        <h2>Get your first dog by clicking the button!</h2>
      )}
      <Button getDogPhoto={getDogPhoto} />
      {dogPhotos.map((item, count) => {
        return <DogPhoto key={count} imgAddress={item} />;
      })}
    </>
  );
};
