import React from "react";
import "./welcome.css";
import double from "../../../pics/double2.jpg";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-text">
        <h1>Välkomna till Konvaljen</h1>
        <h2>Säsongsbetonade blommor och unika buketter för just dig</h2>
        <h3>
          Sedan 80-talet har vi levererat blommor av högsta kvalitet till kunder
          över hela Trollhättan. Vi värdesätter personlig service och skapar
          blomsterarrangemang utifrån era individuella önskemål. Oavsett om du
          söker blommor till en stor högtid eller lite vardagsglädje, så har vi
          alltid säsongens vackraste blomster i lager. Med vårt breda utbud av
          snittblommor, trendiga krukväxter och dekorativa tillbehör får ni
          uppleva blomsterglädje på riktigt. <p />
          Vi brinner för kreativa utmaningar och njuter av alla de underbara
          möten vi får med er kunder. Behöver ni beställa blommor och inte kan
          ta er hit? Inga problem – vi erbjuder snabb hemleverans till hela
          trestad. Tveka inte att höra av er till oss så hjälper vi er. <p />
          Välkommen till Konvaljen – Där blommor är vår passion i livet!
        </h3>
      </div>
      <div className="welcome-pic">
        <img src={double} alt="jul och åretomväxter" />
      </div>
    </div>
  );
};

export default Welcome;
