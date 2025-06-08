import React from "react";
import "./Blommor.css";
import pic from "../../../pics/bouquet.jpg";
import bukett from "../../../pics/Desktop Sommarblommor 2160x750.png";

const Blommor = () => {
  return (
    <div className="blommors">
      <div className="blommor-head">
        <img src={bukett} alt="bukett" />
        <div className="blommor-head-text">
          <span>
            Varje bukett är unik <p /> Varje blomma är säsongsberoende
            <p /> Varje människa gillar olika saker{" "}
          </span>
        </div>
      </div>
      <div>
        {" "}
        <h2 className="blommor-title-text">
          Letar du efter buketter i Trollhättan? Vi erbjuder det rätta för varje
          tillfälle.
        </h2>
      </div>
      <div className="blommor-gallery">
        <div className="blommor-gallery-items">
          <div className="blommor-gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span>Från 479 kr</span>
          </div>
          <div className="blommor-gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span>Från 479 kr</span>
          </div>
          <div className="blommor-gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span>Från 479 kr</span>
          </div>
          <div className="blommor-gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span>Från 479 kr</span>
          </div>
          <div className="blommor-gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span>Från 479 kr</span>
          </div>
          <div className="blommor-gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span>Från 479 kr</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blommor;
