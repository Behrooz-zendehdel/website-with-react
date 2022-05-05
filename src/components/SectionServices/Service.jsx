import React from "react";
import "./service.css";
import HeartEmoji from "../../img/3.png";
import cuble from "../../img/4.png";
import jole from "../../img/5.png";
import Card from "../Card/Card";
import Resume from "../../img/1.png";
function Service() {
  return (
    <div className="Service">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          animi.
          <br />
          Lorem ipsum dolor sit amet.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/*  right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            Heading={"Design"}
            detail={"figma ,Sketch,Photoshop,Adobe,adobe xd"}
          />
        </div>
        <div style={{ left: "-4rem", top: "12rem" }}>
          <Card
            emoji={cuble}
            Heading={"developer"}
            detail={"html,javascript,react"}
          />
        </div>
        <div style={{ left: "12rem", top: "19rem" }}>
          <Card
            emoji={jole}
            Heading={"backend"}
            detail={"laravel,payton,goblin,php"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Service;
