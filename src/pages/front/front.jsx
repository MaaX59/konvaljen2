import React from "react";
import Meny from "./meny/Meny";
import Header from "./header/Header";
import Welcome from "./welcome/Welcome";

const Front = () => {
  return (
    <div>
      <Meny />
      <Header />
      <Welcome />
    </div>
  );
};

export default Front;
