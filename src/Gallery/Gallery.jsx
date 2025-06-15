import { React, useState } from "react";
import "./Gallery.css";

const Gallery = ({ item }) => {
  const [fullImage, setFullImage] = useState();

  const { name, price, pic } = item;

  return (
    <div classname="gallerys">
      <div className="gallerys-item" onClick={() => setFullImage(pic)}>
        <img src={pic} alt="awdawd" />
        <h2> {name}</h2>
        <span> {price}</span>
      </div>
      {fullImage && (
        <div
          className="gallerys-item-full"
          class="fixed w-full h-full top-0 left-0 z-50 flex bg-opacity-60 items-center justify-center bg-black "
          onClick={() => setFullImage()}
        >
          <img
            src={fullImage}
            alt="fullimage"
            class="relative rounded-lg flex md:h-3/4 "
          />
          <div class="fixed top-5 right-10 text-white text-4xl cursor-pointer">
            x
          </div>
        </div>
      )}
    </div>
  );
};
export default Gallery;
