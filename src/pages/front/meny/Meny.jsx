import React from "react";
import logo from "../../../pics/LOGO_PRINCIPAL_KOLVAJEN.png";
import "./meny.css";

const Meny = () => {
  return (
    <div className="meny">
      <img src={logo} alt="big logo" />
      <div className="meny-navbar">
        <div className="meny-navbar-oss">
          <h2>Om Oss</h2>
        </div>
        <div className="meny-navbar-tjänster">
          <h2>Våra Tjänster</h2>
        </div>
        <div className="meny-navbar-kontakt">
          <h2>Kontakt</h2>
        </div>
      </div>
    </div>
  );
};

export default Meny;
