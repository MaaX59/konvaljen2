import React from "react";
import bröllop1 from "../../../pics/brollop1.jpg";
import bröllop2 from "../../../pics/bröllop 2.jpg";
import bröllop3 from "../../../pics/bröllop3.jpg";
import { Link } from "react-router-dom";
import "./Brollop.css";

const Brollop = () => {
  return (
    <div className="bröllop">
      <div className="bröllop-title">
        {" "}
        <h2>Bröllop</h2>{" "}
      </div>
      <div className="bröllop-pics">
        <img src={bröllop1} alt="bröllop" />
        <img src={bröllop3} alt="bröllop" />
        <img src={bröllop2} alt="bröllop" />
      </div>
      <div className="bröllop-text">
        <span>
          Har ni brölloplaner?
          <p /> Då vet vi att ni vill skapa ett ljust o vackert o oförglömligt
          minne för alla inblandade inklusive er själva. Här kan vi hjälpa till.
          Med en ide eller ett tema blir bröllopet mer personligt o roligare.
          <p />
          Exempel på teman kan vara Årstider, Natur, Färger, Miljöer Det är nu
          det roliga börjar för oss genom att komma med våra idéer o vår
          kreativa expertis förstärker vi ert tema lite Brain stormning brukar
          göra susen det med , vad vågar vi hitta på med kyrkan, vigselrummet,
          bröllopsportalen, festlokalen, borden o gästerna? <p />
          Och till allt detta som kronan på verket en magnifik matchande
          brudbukett, Tärnbuketter, corsage o näbb-blommorna <p />
          Eller om ni helt enkelt vill ha en magisk brudbukett så låt oss smycka
          din framtida lycka Boka en bröllops konsultation. På
          brudkonsultstionen så sätter vi oss i vår bröllopshörna o pratar
          igenom o spånar, tittar på bilder och känner på blommorna inför den
          stundande högtiden.
          <p />
          <p />
          Varje Bröllop är en unik händelse som förtjäner en unik dekoration.
          <p />
          <Link to="/kontakt"> Kontakta oss för att boka en konsultation.</Link>
        </span>
      </div>
    </div>
  );
};

export default Brollop;
