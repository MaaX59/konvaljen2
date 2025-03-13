import React from "react";
import Meny from "../front/meny/Meny";
import Footer from "../front/footer/Footer";
import Begravning from "./Begravning/Begravning";

const begravning = () => {
  return (
    <div>
      <Meny />
      <Begravning />
      <Footer />
    </div>
  );
};

export default begravning;
