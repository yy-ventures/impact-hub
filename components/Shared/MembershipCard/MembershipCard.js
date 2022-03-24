import React, { useState } from "react";
import MembershipModal from "../MembershipModal/MembershipModal";
import Button from "../Button/Button";
import FeatureAvailability from "./MembershipSVGs/FeatureAvailability";
import MembershipBg from "./MembershipSVGs/MembershipBg";
const MembershipCard = ({ title, price, details, modifierClass }) => {
  // Show or hide membership card
  const [showCard, setShowCard] = useState(false);
  //  Show or hide membership form
  const [showForm, setShowForm] = useState(false);
  const handleCloseModal = (e) => {
    if (
      e.target.className === "membership_modal" &&
      e.target.className !== "membership_modal_container"
    ) {
      setShowForm(false);
    }
  };
  const handleShowModal = () => {
    setShowForm(true);
  };
  return (
    <div
      className={`membership-card ${modifierClass && modifierClass} ${showCard && "show-card"}`}
      onClick={() => setShowCard(!showCard)}
    >
      <div className="membership-card_plan">
        <MembershipBg />
        <div className="membership-card_plan_header">
          <h2 className="membership-card_plan_header_title">{title}</h2>
          <h3 className="membership-card_plan_header_price">
            {price}
            <span>/ month</span>
          </h3>
          <span className="membership-card_plan_header_duration">8hrs / month</span>
        </div>
      </div>
      <div className="membership-card_details">
        {details &&
          details.map(({ id, name, is_available }) => {
            return (
              <div key={id} className="membership-card_details_paragraph">
                <p>{name}</p>
                <FeatureAvailability available={is_available} />
              </div>
            );
          })}
      </div>
      <div className="membership-card_btn">
        <div onClick={handleShowModal}>
          <Button text="choose plans" type="secondary" />
        </div>
      </div>
      {showForm && <MembershipModal handleCloseModal={handleCloseModal} optionTitle={title} />}
    </div>
  );
};

export default MembershipCard;
