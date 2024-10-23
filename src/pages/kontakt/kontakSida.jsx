import React from "react";
import Meny from "../front/meny/Meny";
import Footer from "../front/footer/Footer";
import KontaktInnehåll from "./KontaktInnehåll/KontaktInnehåll";

const kontakSida = () => {
  return (
    <div>
      <Meny />
      <KontaktInnehåll />
      <Footer />
    </div>
  );
};

export default kontakSida;
