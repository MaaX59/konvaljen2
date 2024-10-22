import React from "react";
import "./OmOss.css";
import Oss from "../../../pics/Om oss.png";

const OmOss = () => {
  return (
    <div className="OmOss">
      <div className="OmOss-text">
        <h2>OM OSS</h2>
        <span>
          För de som inte redan kommit in och träffat oss, vi är de nya ägarna
          av Konvaljen.
          <p /> Främst Bénédicte som kommer från Frankrike, hennes familj har
          odlat blommor i tre generationer. Hon har hjälp av sin make Max som
          kommer från Vänersborg och har jobbat med blommor i sex år.
          <p /> Vi är stolta att ta över en butik som funnits på Torggatan sedan
          80-talet och vi ser fram emot att välkomna er till butiken.
        </span>
      </div>
      <div className="OmOss-bild">
        <img src={Oss} alt="" />
      </div>
    </div>
  );
};

export default OmOss;
