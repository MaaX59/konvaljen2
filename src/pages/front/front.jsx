import React from "react";
import Meny from "./meny/Meny";
import Header from "./header/Header";
import Welcome from "./welcome/Welcome";
import Footer from "./footer/Footer";
import Blommor from "./Oss/Oss.jsx";
import VårButik from "./VårButik/VårButik.jsx";
import Bukett from "./Bukett/Bukett.jsx";

const Front = () => {
  return (
    <div>
      <Meny />
      <Header />
      <Welcome />
      <Blommor />
      <VårButik />
      <Bukett />

      <Footer />
    </div>
  );
};

export default Front;
