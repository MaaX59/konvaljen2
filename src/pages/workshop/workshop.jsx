import React from "react";
import Meny from "../front/meny/Meny";
import Footer from "../front/footer/Footer";
import Workshop from "./Workshop/Workshop";
const workshop = () => {
  return (
    <div>
      <Meny />
      <Workshop />

      <Footer />
    </div>
  );
};

export default workshop;
