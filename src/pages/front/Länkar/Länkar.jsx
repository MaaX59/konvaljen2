import React from "react";
import "./länkar.css";
import kontakt from "../../../pics/Kontakta oss.png";
import tjänster from "../../../pics/Våra tjänster.png";
import oss from "../../../pics/Om oss.png";

const Länkar = () => {
  return (
    <div className="länkar">
      <div className="länkar-oss">
        <div className="länkar-oss-box">
          <img src={oss} alt="om oss" />
        </div>
        <h3>Om oss</h3>
      </div>
      <div className="länkar-tjänster">
        <div className="länkar-tjänster-box">
          <img src={tjänster} alt="våra tjänster" />
        </div>
        <h3>Våra Tjänster</h3>
      </div>
      <div className="länkar-kontakt">
        <div className="länkar-kontakt-box">
          <img src={kontakt} alt="kontakta oss" />
        </div>
        <h3>Kontakta oss</h3>
      </div>
    </div>
  );
};

export default Länkar;
