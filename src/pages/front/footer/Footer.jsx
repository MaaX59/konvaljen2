import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import vector from "../../../pics/vactor.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-kontakt">
        <h2 className="footer-title">Kontakt</h2>
        <span>
          076 27 86 41 6 <p />
          Torggatan 9, Trollhättan
          <p />
          Kontakt@konvaljentrollhattan.se
        </span>
      </div>
      <div className="footer-tider">
        <h2 className="footer-title">Öppetider</h2>
        <span>
          <p />
          Måndag - Fredag: 10:00 - 18:00
          <p />
          Lördag: 10:00 - 16:00
          <p />
          Söndag: Stängt
        </span>
      </div>
      <div className="footer-media">
        <FaFacebook size={35} />
        <FaInstagram size={35} />
      </div>
    </div>
  );
};

export default Footer;
