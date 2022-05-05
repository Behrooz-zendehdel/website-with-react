import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import linkdin from "../../img/linkdin.png";
import instagram from "../../img/instagram.png";
import Crown from "../../img/1.png";
import Glass from "../../img/2.png";
import intro from "../../img/intro.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Float from "../../img/float.png";
import Float2 from "../../img/float2.png";
import imoji from "../../img/imoji.png";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy ! I Am</span>
          <span>Andrew Tomas</span>
          <span>
            Frontend Developer with high level of wxperience in web designing
            and develompent , producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>

        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={linkdin} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Crown} alt="" />
        <img src={Glass} alt="" />
        <img src={intro} alt="" />
        <img src={imoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Float} text1="web" text2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={Float2} text1="tools" text2="desginer" />
        </div>
        {/* blur divs */}
        <div
          className="blur"
          style={{
            background: "rgb(238 210 255)",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
