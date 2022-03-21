import React, { useState } from "react";
import MembershipModal from "../../Membership/MembershipModal/MembershipModal";
import Button from "../Button/Button";
import FeatureAvailability from "./MembershipSVGs/FeatureAvailability";
import MembershipBg from "./MembershipSVGs/MembershipBg";
const MembershipCard = ({ title, price, duration, details, modifierClass }) => {

  const [showForm, setShowForm] = useState(false)
  const handleCloseModal = e => {
    if (e.target.className === "membership_modal" && e.target.className !== "membership_modal_container") {
      setShowForm(false)
    }
  }

  const handleShowModal = () => {
    setShowForm(true)
  }
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
        <div onClick={handleShowModal}><Button text="choose plans" type="secondary"/></div>
      </div>
      {showForm && <MembershipModal handleCloseModal={handleCloseModal} optionTitle={title}/>}
    </div>
  );
};

export default MembershipCard;
