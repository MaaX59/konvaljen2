import React from "react";
import "./Foretag.css";
import foretag1 from "../../../pics/foretag1.jpg";
import foretag2 from "../../../pics/företag2.jpg";
import foretag3 from "../../../pics/företag3.png";

const Foretag = () => {
  return (
    <div className="foretag">
      <div className="foretag-title">
        <div className="foretag-title-pic">
          <img src={foretag1} alt="företag" />
        </div>
        <div className="foretag-title-text">
          <h2>Företag</h2>
          <span>
            Förbättra ditt varumärkes image och lyft din arbetsyta med våra
            fantastiska blomsterarrangemang.
            <p /> Oavsett om du inreder för ett privat evenemang eller en
            företagsfest, är vårt utbud av färska blommor designat för att
            imponera. <p />
            För frågor vänligen kontakta oss för att få ett mer skräddarsytt
            svar efter dina behov.
          </span>
        </div>
      </div>
      <div className="foretag-innehåll">
        <div className="foretag-innehåll-grupp">
          <div className="foretag-innehåll-grupp-bild">
            <img src={foretag2} alt="företag 2" />
          </div>
          <div className="foretag-innehåll-grupp-text">
            Förbättra ditt varumärkes image och lyft din arbetsyta med våra
            fantastiska blomsterarrangemang. Oavsett om du inreder för ett
            privat evenemang eller en företagsfest, är vårt utbud av färska
            blommor designat för att imponera. För frågor vänligen kontakta oss
            för att få ett mer skräddarsytt svar efter dina behov.
          </div>
        </div>
        <div className="foretag-innehåll-grupp">
          <div className="foretag-innehåll-grupp-text">
            Förbättra ditt varumärkes image och lyft din arbetsyta med våra
            fantastiska blomsterarrangemang. Oavsett om du inreder för ett
            privat evenemang eller en företagsfest, är vårt utbud av färska
            blommor designat för att imponera. För frågor vänligen kontakta oss
            för att få ett mer skräddarsytt svar efter dina behov.
          </div>
          <div className="foretag-innehåll-grupp-bild">
            <img src={foretag3} alt="företag 2" />
          </div>
        </div>
        <div className="foretag-innehåll-grupp">
          <div className="foretag-innehåll-grupp-bild">
            <img src={foretag2} alt="företag 2" />
          </div>
          <div className="foretag-innehåll-grupp-text">
            Förbättra ditt varumärkes image och lyft din arbetsyta med våra
            fantastiska blomsterarrangemang. Oavsett om du inreder för ett
            privat evenemang eller en företagsfest, är vårt utbud av färska
            blommor designat för att imponera. För frågor vänligen kontakta oss
            för att få ett mer skräddarsytt svar efter dina behov.
          </div>
        </div>
      </div>
      <div className="foretag-andratjanster">
        <h2> Övriga tjänster</h2>
        <span> awdawda awdawdawd</span>
        <span> awdawda awdawdawd</span>
        <span> awdawda awdawdawd</span>
        <span> awdawda awdawdawd</span>
      </div>
    </div>
  );
};

export default Foretag;
