import React from "react";
import "./tjänster.css";

const Tjänster = () => {
  return (
    <div className="tjänster">
      <div className="tjänster-oss">
        <div className="tjänster-oss-box"></div>
        <h3>Om oss</h3>
      </div>
      <div className="tjänster-tjänster">
        <div className="tjänster-tjänster-box"></div>
        <h3>Våra tjänster</h3>
      </div>
      <div className="tjänster-kontakt">
        <div className="tjänster-kontakt-box"></div>
        <h3>Kontakta oss</h3>
      </div>
    </div>
  );
};

export default Tjänster;
