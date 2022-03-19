import React from "react";

const Card = ({ parentClass, text, expand, span }) => {
  return (
    <div className={expand ? `${parentClass}_card expand` : `${parentClass}_card`}>
      <h3>{text}</h3>
      <p>{span && " " + span}</p>
    </div>
  );
};

export default Card;
