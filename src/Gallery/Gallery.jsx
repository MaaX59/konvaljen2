import { React, useState } from "react";
import "./Gallery.css";

const Gallery = ({ item }) => {
  const [fullImage, setFullImage] = useState();

  const { name, price, pic } = item;

  return (
    <div classname="gallerys">
      <div className="gallerys-item" onClick={() => setFullImage(pic)}>
        <img src={pic} alt="awdawd" />
        <h2>{name}</h2>
        <span>{price}</span>
      </div>
      {fullImage && (
        <div className="gallerys-item-full" onClick={() => setFullImage()}>
          <img src={fullImage} alt="fullimage" />
          <div className="gallerys-item-full-cross">
            <h2>x</h2>
          </div>
        </div>
      )}
    </div>
  );
};
export default Gallery;
