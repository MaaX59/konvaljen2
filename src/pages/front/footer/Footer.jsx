import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-kontakt">
        <span>
          Torggatan 9 <p />
          Trollhättan
          <p />
          <p />
          Tel 076 27 86 41 6 <p />
          Email kontakt@konvaljentrollhattan.se
        </span>
      </div>
      <div className="footer-tider">
        <span>
          Öppetider
          <p />
          Mån - Fre: 10:00 - 18:00
          <p />
          Lör: 10:00 - 16:00
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
