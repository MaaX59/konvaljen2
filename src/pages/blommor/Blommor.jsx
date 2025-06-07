import React from "react";
import Meny from "../front/meny/Meny";
import Blommor from "./Blommor/Blommor";
import Footer from "../front/footer/Footer";

const blommor = () => {
  return (
    <div>
      <Meny />
      <Blommor />
      <Footer />
    </div>
  );
};

export default blommor;
