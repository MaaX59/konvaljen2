import React from "react";
import "./Blommor.css";
import pic from "../../../pics/bouquet.jpg";
import bukett from "../../../pics/Desktop Sommarblommor 2160x750.png";
import Gallery from "../../../Gallery/Gallery";
import { Buketter2 } from "../../../Gallery/Buketter2";

const Blommor = () => {
  return (
    <div className="blommors">
      <div className="blommor-head">
        <img src={bukett} alt="bukett" />
        <div className="blommor-head-text">
          <span>
            {" "}
            Varje människa är unik <p />
            Varje blomma är säsongsberoende
          </span>
        </div>
      </div>
      <div>
        {" "}
        <h2 className="blommor-title-text">
          Letar du efter buketter i Trollhättan? Vi erbjuder det rätta för varje
          tillfälle.
          <p />
          Tryck här för blommor till <a href="/begravning">begravning </a>
          eller <a href="/brollop">bröllop</a>.
        </h2>
        <h3 className="blommor-title-text-andra">
          Beställningar sker via <a href="/kontakt">telefon eller email</a>.
        </h3>
      </div>
      <div className="blommor-gallery-items">
        {Buketter2.map((item, index) => (
          <Gallery item={item} key={index} />
        ))}
      </div>
      {/* <div className="blommor-gallery">
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
      </div> */}
    </div>
  );
};

export default Blommor;
