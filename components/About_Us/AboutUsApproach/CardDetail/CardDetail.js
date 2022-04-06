import React from "react";
import CardSvg from "./CardSvg";
const CardDetail = ({ parentClass, index, heading, details }) => {
  return (
    <div className={parentClass + "_card"}>
      <CardSvg />
      <div className={parentClass + "_card_details"}>
        <h4 className="body-global">{heading}</h4>
        <p className="body-global">{details}</p>
      </div>
    </div>
  );
};

export default CardDetail;
