import logo from "../../../pics/LOGO_PRINCIPAL_KOLVAJEN.png";
import "./meny.css";
import { useState, React } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Meny = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="meny">
      <div className="meny-navbar">
        <div className="meny-navbar-oss">
          <a href="/om-oss"> Om Oss</a>
        </div>
        <div>
          <a href="/workshop">Workshops</a>
        </div>
        <div className="meny-navbar-hem">
          <a href="/">
            <img src={logo} alt="big logo" />
          </a>
        </div>
        <div className="meny-navbar-tjänster">
          <a href="/tjanster">Tjänster</a>
        </div>
        <div className="meny-navbar-kontakt">
          <a href="/kontakt">Kontakt</a>
        </div>
      </div>
      <div className="meny-navbar-smallscreen">
        <GiHamburgerMenu
          color="#3a4e5d"
          fontSize={50}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="meny-navbar-smallscreen-overlay flex__center slide-bottom">
            <ImCross
              fontSize={27}
              color="#fff"
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="meny-navbar-smallscreen-links">
              <a href="/"> Hem</a>

              <a href="/om-oss"> Om Oss</a>

              <a href="/tjanster"> Våra Tjänster</a>

              <a href="/kontakt"> Kontakt</a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Meny;
