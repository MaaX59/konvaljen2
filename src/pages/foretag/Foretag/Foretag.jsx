import React from "react";
import "./Foretag.css";
import foretag1 from "../../../pics/foretag1.jpg";
import foretag2 from "../../../pics/företag2.jpg";
import foretag3 from "../../../pics/företag3.png";
import foretag4 from "../../../pics/foretag4.png";
import foretag5 from "../../../pics/foretag5.jpg";

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
            <p />
            För frågor vänligen kontakta oss för att få ett mer skräddarsytt
            svar efter dina behov.
          </span>
        </div>
      </div>
      <div className="foretag-innehåll">
        <div className="foretag-innehåll-grupp">
          <div className="foretag-innehåll-grupp-bild">
            <img src={foretag3} alt="företag 2" />
          </div>
          <div className="foretag-innehåll-grupp-text">
            <h2>Receptionsblommor</h2>
            <span>
              Vi levererar fräscha blommor till er, varje vecka!
              <p /> Boka ett förutsättningslöst möte så gör vi en behovsanalys
              och ett kostnadsförslag på plats..
            </span>
          </div>
        </div>
        <div className="foretag-innehåll-grupp">
          <div className="foretag-innehåll-grupp-text">
            <h2>Konferans & Event</h2>
            <span>
              Privat fest eller stort evenemang. Vi tar fasta på temat och
              skapar unika arrangemang av säsongens blommor. Alltid smidigt,
              diskret och av hög kvalitet.
            </span>
          </div>
          <div className="foretag-innehåll-grupp-bild">
            <img src={foretag2} alt="företag 2" />
          </div>
        </div>
        <div className="foretag-innehåll-grupp">
          <div className="foretag-innehåll-grupp-bild">
            <img src={foretag4} alt="företag 2" />
          </div>
          <div className="foretag-innehåll-grupp-text">
            <h2>Blommor till anställda</h2>
            <span>
              Genom en unik förmedlingsservice kan vi hjälpa er med blommor till
              anställda på ett snabbt och smidigt sätt som också underlättar för
              ekonomiavdelningen!.
            </span>
          </div>
        </div>
        <div className="foretag-innehåll-grupp">
          <div className="foretag-innehåll-grupp-text">
            <h2>Lagbyggande Workshop</h2>
            <span>
              Genom teamutveckling kan företag inte bara förbättra produktivitet
              och arbetsmoral, utan också skapa en mer sammanhållen och
              motiverad arbetsstyrka.
            </span>
          </div>
          <div className="foretag-innehåll-grupp-bild">
            <img src={foretag5} alt="företag 2" />
          </div>
        </div>
      </div>
      <div className="foretag-andratjanster">
        <h2> Övriga tjänster</h2>
        <span> Kontorsväxter</span>
        <span> Entredekorationer</span>
        <span> Scendekorationer</span>
        <span> Julblommor</span>
        <span> Utomhusplanteringar</span>
      </div>
    </div>
  );
};

export default Foretag;
