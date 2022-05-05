import React from "react";
import "./Works.css";
import upwork from "../../img/6.png";
import upface from "../../img/7.png";
import upins from "../../img/8.png";
import uptel from "../../img/9.png";
import uplink from "../../img/10.png";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>works for all these</span>
        <span>brands & clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          animi.
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          nihil alias doloremque commodi minus fugit illo, itaque vero veritatis
        </span>

        <button className="button s-button">Download CV</button>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={upface} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={upins} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={uptel} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={uplink} alt="" />
          </div>
        </div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
