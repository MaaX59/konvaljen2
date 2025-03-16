import React from "react";
import { Link } from "react-router-dom";
import "./våraTjänster.css";
import bild from "../../../pics/Våra tjänster.png";

const våraTjänster = () => {
  return (
    <div className="våraTjänster">
      <div className="våraTjänster-bröllop">
        <div className="våraTjänster-bröllop-bild">
          <img src={bild} alt="bild" />
        </div>
        <div className="våraTjänster-bröllop-text">
          <h2>Bröllop</h2>
          <span>
            Ditt bröllop är ett minne för livet, en dag att minnas med glädje.
          </span>
        </div>
        <Link to="/brollop">
          <button className="våraTjänster-button"> Läs mer!</button>
        </Link>
        <hr className="våraTjänster-linje"></hr>
      </div>

      <div className="våraTjänster-företag">
        <div className="våraTjänster-företag-bild">
          <img src={bild} alt="bild" />
        </div>
        <div className="våraTjänster-företag-text">
          <h2>Företag</h2>
          <span>
            Smycka er reception eller konferans med vackra buketter eller
            dekorationer. <p /> Vi erbjuder abonemang där du får en ny bukett
            varje eller varannan vecka.
          </span>
        </div>

        <Link to="/foretag">
          <button className="våraTjänster-button"> Läs mer!</button>
        </Link>
        <hr className="våraTjänster-linje"></hr>
      </div>

      <div className="våraTjänster-begravning">
        <div className="våraTjänster-begravning-bild">
          <img src={bild} alt="bild" />
        </div>
        <div className="våraTjänster-begravning-text">
          <h2>Begravning</h2>
          <span>
            En sista hälsning, ett sista farväl. <p />
            Ett varkert minne av en älskad vän, släktning eller kollega.
          </span>
        </div>
        <Link to="/begravning">
          <button className="våraTjänster-button"> Läs mer!</button>
        </Link>
        <hr className="våraTjänster-linje"></hr>
      </div>
    </div>
  );
};

export default våraTjänster;
