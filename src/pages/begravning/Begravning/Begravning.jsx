import { React, useEffect } from "react";
import "./Begravning.css";
import pic from "../../../pics/kistdekoration.jpg";
import krans from "../../../pics/krans.jpg";
import funeral from "../../../pics/funeral.png";

const Begravning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="begravning">
      <div className="begravning-title">
        <img src={funeral} alt="title" />
      </div>
      <div className="begravning-links">
        <li>
          <a href="#kistdekorationer">Kistdekorationer</a>
        </li>
        <li>
          <a href="#kransar">Kransar</a>
        </li>
        <li>
          <a href="#kransar">Höga Dekorationer</a>
        </li>
        <li>
          <a href="#kransar">kransar</a>
        </li>
      </div>
      <div className="gallery">
        <div className="gallery-title" id="kistdekorationer">
          <h2>Kistdekorationer</h2>
        </div>
        <div className="gallery-items">
          <div className="gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
          <div className="gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
          <div className="gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
          <div className="gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
          <div className="gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
          <div className="gallery-item">
            <img src={pic} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
        </div>
        <div className="gallery-title" id="kransar">
          <h2>Kransar</h2>
        </div>
        <div className="gallery-items">
          <div className="gallery-item">
            <img src={krans} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
          <div className="gallery-item">
            <img src={krans} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
          <div className="gallery-item">
            <img src={krans} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
          <div className="gallery-item">
            <img src={krans} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
          <div className="gallery-item">
            <img src={krans} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
          <div className="gallery-item">
            <img src={krans} alt="awdawd" />
            <h2> Color pallet</h2>
            <span> 2300 kr</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Begravning;
