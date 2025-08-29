import React from "react";
import "./Oss.css";
import bild from "../../../pics/max.png";
import bild2 from "../../../pics/bebe.png";
import bild3 from "../../../pics/oss.png";

const Oss = () => {
  return (
    <div className="oss">
      <div className="oss-title">
        <h2>Max & Benedicte</h2>
      </div>
      <div className="oss-bild">
        <img src={bild} alt="oss1" />
        <img src={bild3} alt="oss2" />
        <img src={bild2} alt="oss3" />
      </div>
      <div className="oss-text">
        <h3>
          {" "}
          För de som inte redan kommit in och träffat oss, vi är de nya ägarna
          av Konvaljen. <p /> Främst Bénédicte som kommer från Frankrike, hennes
          familj har odlat blommor i tre generationer. Hon har hjälp av sin make
          Max som kommer från Vänersborg och har jobbat med blommor i sex år.{" "}
          <p /> Vi är stolta att ta över en butik som funnits på Torggatan sedan
          80-talet och vi ser fram emot att välkomna er till butiken.
        </h3>
      </div>
    </div>
  );
};

export default Oss;
