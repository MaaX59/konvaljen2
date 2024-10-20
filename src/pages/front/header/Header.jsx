import React from "react";
import "./Header.css";
import headerImg from "../../../pics/header2.png";

const Header = () => {
  return (
    <div className="header">
      <img src={headerImg} alt="konvaljen front" />
      <div className="header-info">
        <h2>En blomma för varje stund</h2>
      </div>
      <button>
        <h2>Kontakta oss</h2>
      </button>
    </div>
  );
};

export default Header;
