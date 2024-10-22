import React from "react";
import Meny from "./meny/Meny";
import Header from "./header/Header";
import Welcome from "./welcome/Welcome";
import Länkar from "./Länkar/Länkar";

const Front = () => {
  return (
    <div>
      <Meny />
      <Header />
      <Welcome />
      <Länkar />
    </div>
  );
};

export default Front;
