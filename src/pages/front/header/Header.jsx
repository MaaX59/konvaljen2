import React from "react";
import "./Header.css";
import headerImg from "../../../pics/header4.jpg";
import headerImg2 from "../../../pics/header4copy.jpg";
import logo2 from "../../../pics/logo2.png";

const Header = () => {
  return (
    <div className="header">
      {/* <div className="header-slider">
        <img src={logo2} alt="logo" />
      </div> */}{" "}
      <img className="header-bg" src={headerImg} alt="konvaljen front" />
      <img className="header-bg2" src={headerImg2} alt="konvaljen front" />
      <div className="header-info">
        <h2>En blomma för varje stund</h2>
      </div>
    </div>
  );
};

export default Header;
