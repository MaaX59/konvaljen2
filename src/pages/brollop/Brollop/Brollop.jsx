import React from "react";
import brollop1 from "../../../pics/wedding1.jpg";
import brollop2 from "../../../pics/wedding2.jpg";
import brollop3 from "../../../pics/wedding3.jpg";
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
        <img src={brollop1} alt="bröllop1" />
        <img src={brollop3} alt="bröllop2" />
        <img src={brollop2} alt="bröllop3" />
      </div>
      <div className="bröllop-text">
        <span>
          Har ni brölloplaner?
          <p /> Då vet vi att ni vill skapa ett ljust och vackert och
          oförglömligt minne för alla inblandade inklusive er själva. Här kan vi
          hjälpa till. Med en ide eller ett tema blir bröllopet mer personligt
          och roligare.
          <p />
          Exempel på teman kan vara Årstider, Natur, Färger, Miljöer Det är nu
          det roliga börjar för oss genom att komma med våra idéer och vår
          kreativa expertis förstärker vi ert tema lite Brain stormning brukar
          göra susen det med , vad vågar vi hitta på med kyrkan, vigselrummet,
          bröllopsportalen, festlokalen, borden och gästerna? <p />
          Och till allt detta som kronan på verket en magnifik matchande
          brudbukett, Tärnbuketter, corsage och näbb-blommorna <p />
          Eller om ni helt enkelt vill ha en magisk brudbukett så låt oss smycka
          din framtida lycka Boka en bröllops konsultation. På
          brudkonsultstionen så sätter vi oss i vår bröllopshörna och pratar
          igenom och spånar, tittar på bilder och känner på blommorna inför den
          stundande högtiden.
          <p />
          <p />
          Varje Bröllop är en unik händelse som förtjäner en unik dekoration.
          <p />
          <Link className="bröllop-text-link" to="/kontakt">
            {" "}
            Kontakta oss för att boka en konsultation.
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Brollop;
