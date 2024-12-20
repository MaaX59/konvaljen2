import React from "react";
import "./KontaktInnehåll.css";
import kontaktaOss from "../../../pics/Kontakta oss.jpg";

const KontaktInnehåll = () => {
  return (
    <div className="KontaktInnehåll">
      <div className="KontaktInnehåll-bild">
        <img src={kontaktaOss} alt="kontakta oss" />
      </div>
      <div className="KontaktInnehåll-text">
        <h2>Kontakt</h2>
        <span>
          Bästa sättet att kontakta oss är att komma in och träffa oss! <p />{" "}
          Annars hittar du kontakt information längst ner på hemsidan.
        </span>
      </div>
    </div>
  );
};

export default KontaktInnehåll;
