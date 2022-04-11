import React from "react";

const Card = ({ parentClass, text, expand, span, heading = false }) => {
  return (
    <div className={`${parentClass}_card ${heading ? "card-heading" : "card-features"} ${expand ? "expand" : ""}`}>
      <h3>{text}</h3>
      <p>{span && " " + span}</p>
    </div>
  );
};

export default Card;
