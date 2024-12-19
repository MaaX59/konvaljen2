import React from "react";
import "./VårButik.css";
import pic from "../../../pics/Våra tjänster.png";

const VårButik = () => {
  return (
    <div className="vårbutik">
      <div className="vårbutik-första-raden">
        <img src={pic} alt="asd" />
        <img src={pic} alt="asd" />
        <img src={pic} alt="asd" />
      </div>
      <div className="vårbutik-text">
        <h1>VÅR NYA BUTIK</h1>
      </div>
      <div className="vårbutik-andra-raden">
        <img src={pic} alt="asd" />
        <img src={pic} alt="asd" />
        <img src={pic} alt="asd" />
        <img src={pic} alt="asd" />
      </div>
    </div>
  );
};

export default VårButik;
