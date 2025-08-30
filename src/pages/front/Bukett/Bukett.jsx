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
            Beställ färska och unika buketter som förändras med årstiderna. Våra
            blommor visar upp variationen och den naturliga skönheten hos
            blommor som finns tillgängliga året runt. Beskriv dina önskemål,
            storleken på buketten du vill ha, stilen (rustik eller klassisk)
            eller tillfället – så tar vi hand om resten!
            <p /> Beställningar sker via telefon, sms eller email.
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
