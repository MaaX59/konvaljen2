import { React, useEffect } from "react";
import "./Begravning.css";
import pic from "../../../pics/flower5.jpg";
import funeral from "../../../pics/funeral.png";

const Begravning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="begravning">
      <div className="begravning-title">
        <img src={funeral} alt="title" />
        <h2>Kistdekorationer</h2>
      </div>
      <div className="gallery">
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
    </div>
  );
};

export default Begravning;
