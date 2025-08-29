import React from "react";
import "./bukett.css";
import bukett from "../../../pics/bukett5.jpg";

const Bukett = () => {
  return (
    <div className="bukett">
      <div className="bukett-text">
        <div className="bukett-text-title">
          {" "}
          <h1>Beställ en bukett</h1>
        </div>
        <div className="bukett-text-text">
          {" "}
          <h4>
            Vous pouvez désormais commander des bouquets sur notre site, pour
            vous faire livrer, pour offrir ou encore les récupérer en magasin.{" "}
            <p />
            Commandez des bouquets frais et uniques qui évoluent avec les
            saisons. Notre service de commande de fleurs met en valeur la
            variété et la beauté naturelle des fleurs disponibles à chaque
            période de l'année. Décrivez nous vos envies, la taille du bouquet
            souhaité, le type (champêtre ou classique) ou encore l'occasion,
            nous nous occupons du reste !{" "}
          </h4>
        </div>
        <div className="bukett-text-button">
          <a href="/blommor"> Beställ</a>
        </div>
      </div>

      <div className="bukett-bild">
        <img src={bukett} alt="" />
      </div>
    </div>
  );
};

export default Bukett;
