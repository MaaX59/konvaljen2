import React from "react";
import "./Workshop.css";
import workshop from "../../../pics/workshop.jpeg";

const Workshop = () => {
  return (
    <div className="workshop">
      <div className="workshop-text">
        <h2>Workshop</h2>

        <h3>LÅT DIN KREATIVITET FLÖDA!</h3>
        <span>
          Kom in till oss och låt din kreativa sida komma fram. Vi erbjuder ett
          gäng olika workshops under årets gång, anpassade efter vad säsongen{" "}
          har att erbjuda. Perfekt för dig som tycker om blommor och vill lära
          dig mer om hur du arrangerar dem på bästa sätt, samtidigt som du har
          en trevlig stund med andra likasinnade personer.
          <p />
          Allt material ingår och under kvällen bjuds det även på fika. Och
          självklart tar du det du skapat med dig hem!{" "}
        </span>
      </div>
      <div className="workshop-bild">
        <img src={workshop} alt="workshop" />
      </div>
    </div>
  );
};

export default Workshop;
