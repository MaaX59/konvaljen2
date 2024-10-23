import React from "react";
import Meny from "../front/meny/Meny";
import Footer from "../front/footer/Footer";
import VåraTjänster from "./våraTjänster.jsx/våraTjänster";

const tjanster = () => {
  return (
    <div>
      <Meny />
      <VåraTjänster />
      <Footer />
    </div>
  );
};

export default tjanster;
