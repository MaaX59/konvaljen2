import React from "react";
import logo from "../../../pics/LOGO_PRINCIPAL_KOLVAJEN.png";
import "./meny.css";

const Meny = () => {
  return (
    <div className="meny">
      <img src={logo} alt="big logo" />
      <div className="meny-navbar">
        <div className="meny-navbar-oss">
          <a href="/om-oss"> Om Oss</a>
        </div>
        <div className="meny-navbar-tjänster">
          <a href="/tjanster"> Våra Tjänster</a>
        </div>
        <div className="meny-navbar-kontakt">
          <a href="/kontakt"> Kontakt</a>
        </div>
      </div>
    </div>
  );
};

export default Meny;
