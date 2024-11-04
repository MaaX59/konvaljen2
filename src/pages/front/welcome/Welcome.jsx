import React from "react";
import "./welcome.css";
import leftRose from "../../../pics/rose3.png";
import rightRose from "../../../pics/rose1.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-leftRose">
        <img src={leftRose} alt="rose2" />
      </div>
      <div className="welcome-text">
        <h1>Välkomna till Konvaljen</h1>
        <h3>
          Sedan 80-talet har vi levererat blommor av högsta kvalitet till kunder
          över hela Trollhättan. <p />
          Vi värdesätter personlig service och skapar blomsterarrangemang
          utifrån era individuella önskemål. <p />
          Oavsett om du söker blommor till en stor högtid eller lite
          vardagsglädje, så har vi alltid säsongens vackraste blomster i lager.
          <p /> Med vårt breda utbud av snittblommor, trendiga krukväxter och
          dekorativa tillbehör får ni uppleva blomsterglädje på riktigt. <p />
          Vi brinner för kreativa utmaningar och njuter av alla de underbara
          möten vi får med er kunder.
          <p /> Behöver ni beställa blommor och inte kan ta er hit? Inga problem
          – vi erbjuder snabb hemleverans till hela trestad. Tveka inte att höra
          av er till oss så hjälper vi er. <p />
          Välkommen till Konvaljen – Där blommor är vår passion i livet!
        </h3>
      </div>
      <div className="welcome-rightRose">
        <img src={leftRose} alt="rose" />
      </div>
    </div>
  );
};

export default Welcome;
