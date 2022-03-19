import React from "react";
import ButtonPrimarySVG from "./ButtonPrimarySVG";
import ButtonSecondarySVG from "./ButtonSecondarySVG";
const Button = ({ text, type }) => {
  return (
    <div className="container">
      <button className={type === "primary" ? "btn btn_primary" : "btn btn_secondary"}>
        {type === "primary" ? <ButtonPrimarySVG /> : <ButtonSecondarySVG />}
        <p>{text}</p>
      </button>
    </div>
  );
};

export default Button;
