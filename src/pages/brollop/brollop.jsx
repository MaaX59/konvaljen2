import React from "react";
import Meny from "../front/meny/Meny";
import Footer from "../front/footer/Footer";
import Brollop from "./Brollop/Brollop";

const brollop = () => {
  return (
    <div>
      <Meny />
      <Brollop />
      <Footer />
    </div>
  );
};

export default brollop;
