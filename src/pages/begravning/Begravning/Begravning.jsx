import { React, useEffect } from "react";
import "./Begravning.css";
import funeral from "../../../pics/funeral.png";
import { Kistdekoration } from "../../../Gallery/Kistdekoration";
import Gallery from "../../../Gallery/Gallery";
import { Kransar } from "../../../Gallery/Kransar";
import { Hjärtan } from "../../../Gallery/Hjärtan";
import { Buketter } from "../../../Gallery/Buketter";

const Begravning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="begravning">
      <div className="begravning-title">
        <img src={funeral} alt="title" />
      </div>
      <div className="begravning-links">
        <li>
          <a href="#kistdekorationer">Kistdekorationer</a>
        </li>
        <li>
          <a href="#kransar">Kransar</a>
        </li>
        <li>
          <a href="#hjärtan">Hjärtan</a>
        </li>
        <li>
          <a href="#Dekorationer">Dekorationer</a>
        </li>

        <li>
          <a href="#Liggandebuketter">Liggande Buketter</a>
        </li>
        <li>
          <a href="#Buketter">Buketter</a>
        </li>
      </div>
      <div className="gallery">
        <div className="gallery-title" id="kistdekorationer">
          <h2>Kistdekorationer</h2>
        </div>
        <div className="blommor-gallery-items">
          {Kistdekoration.map((item, index) => (
            <Gallery item={item} key={index} />
          ))}
        </div>
        <div className="gallery-title" id="kransar">
          <h2>Kransar</h2>
        </div>
        <div className="blommor-gallery-items">
          {Kransar.map((item, index) => (
            <Gallery item={item} key={index} />
          ))}
        </div>
        <div className="gallery-title" id="hjärtan">
          <h2>Hjärtan</h2>
        </div>
        <div className="blommor-gallery-items">
          {Hjärtan.map((item, index) => (
            <Gallery item={item} key={index} />
          ))}
        </div>
        <div className="gallery-title" id="buketter">
          <h2>Buketter</h2>
        </div>
        <div className="blommor-gallery-items">
          {Buketter.map((item, index) => (
            <Gallery item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Begravning;
