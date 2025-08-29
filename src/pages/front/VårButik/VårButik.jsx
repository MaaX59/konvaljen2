import React from "react";
import "./VårButik.css";
import shop1 from "../../../pics/flower1.jpg";
import shop2 from "../../../pics/flower2.jpg";
import shop3 from "../../../pics/flower3.jpg";
import shop4 from "../../../pics/shop4.jpg";
import shop5 from "../../../pics/flower5.jpg";
import shop6 from "../../../pics/flower6.jpg";
import shop7 from "../../../pics/flower7.jpg";

const VårButik = () => {
  return (
    <div className="vårbutik">
      <div className="vårbutik-första-raden">
        <img src={shop1} alt="asd" />

        <img src={shop3} alt="asd" />
        <img src={shop2} alt="asd" />
      </div>
      <div className="vårbutik-text">
        <h1>VÅR NYA BUTIK</h1>
      </div>
      <div className="vårbutik-andra-raden">
        <img src={shop4} alt="asd" />
        <img src={shop5} alt="asd" />
        <img src={shop6} alt="asd" />
        <img src={shop7} alt="asd" />
      </div>
    </div>
  );
};

export default VårButik;
