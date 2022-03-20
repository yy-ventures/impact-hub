import React from "react";
import Button from "../Button/Button";
import FeatureAvailability from "./MembershipSVGs/FeatureAvailability";
import MembershipBg from "./MembershipSVGs/MembershipBg";
const MembershipCard = ({ title, price, duration, details, modifierClass }) => {
  return (
    <div className={modifierClass ? "membership-card " + modifierClass : "membership-card"}>
      <div className="membership-card_plan">
        <MembershipBg />
        <div className="membership-card_plan_header">
          <h2 className="membership-card_plan_header_title">{title}</h2>
          <h3 className="membership-card_plan_header_price">
            {price}
            <span>/ month</span>
          </h3>
          <span className="membership-card_plan_header_duration">{duration} / month</span>
        </div>
      </div>
      <div className="membership-card_details">
        {details &&
          details.map(({ feature, availability }, index) => {
            return (
              <div key={index} className="membership-card_details_paragraph">
                <p>{feature}</p>
                <FeatureAvailability available={availability} />
              </div>
            );
          })}
      </div>
      <div className="membership-card_btn">
        <Button text="choose plans" type="secondary" />
      </div>
    </div>
  );
};

export default MembershipCard;