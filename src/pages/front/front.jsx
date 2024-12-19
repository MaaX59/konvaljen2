import React from "react";
import Meny from "./meny/Meny";
import Header from "./header/Header";
import Welcome from "./welcome/Welcome";
import Länkar from "./Länkar/Länkar";
import Footer from "./footer/Footer";
import VårButik from "./VårButik/VårButik.jsx";

const Front = () => {
  return (
    <div>
      <Meny />
      <Header />
      <Welcome />
      <VårButik />
      <Länkar />
      <Footer />
    </div>
  );
};

export default Front;
