import React from "react";
import "./Card.css";
function Card({ emoji, Heading, detail }) {
  return (
    <div  className="Card">
      <img src={emoji} alt="" />
      <span>{Heading}</span>
      <span>{detail}</span>
      <button className="c-button">Learn more</button>
    </div>
  );
}

export default Card;
