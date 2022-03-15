import React from "react";
import "./Button.scss";
const Button = ({ text, type }) => {
  return (
    <div>
      <button className={type === "primary" ? "btn btn-primary" : "btn btn-secondary"}>
        {text}
      </button>
    </div>
  );
};

export default Button;
