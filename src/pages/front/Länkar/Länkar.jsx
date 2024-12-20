import React from "react";
import { Link } from "react-router-dom";
import "./länkar.css";
import kontakt from "../../../pics/Kontakta oss.jpg";
import tjänster from "../../../pics/Våra tjänster.png";
import oss from "../../../pics/Om oss.png";

const Länkar = () => {
  return (
    <div className="länkar">
      <div className="länkar-oss">
        <div className="länkar-oss-box">
          <Link to="/om-oss">
            <img src={oss} alt="om oss" />
          </Link>
        </div>
        <a href="/om-oss"> Om Oss</a>
      </div>
      <div className="länkar-tjänster">
        <div className="länkar-tjänster-box">
          <Link to="/tjanster">
            <img src={tjänster} alt="våra tjänster" />
          </Link>
        </div>
        <a href="/tjanster"> Våra tjänster</a>
      </div>
      <div className="länkar-kontakt">
        <div className="länkar-kontakt-box">
          <Link to="/kontakt">
            <img src={kontakt} alt="kontakta oss" />
          </Link>
        </div>
        <a href="/kontakt"> Kontakta Oss</a>
      </div>
    </div>
  );
};

export default Länkar;
