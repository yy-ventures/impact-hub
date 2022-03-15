import React from "react";

const Button = ({ key, text, expand, span }) => {
  return (
    <button className={expand}>
      {text}
      <p key={key}>{span && " " + span}</p>
    </button>
  );
};

export default Button;
