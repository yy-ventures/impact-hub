import React, { useState, useRef } from "react";
import MembershipModal from "../MembershipModal/MembershipModal";
import Button from "../Button/Button";
import FeatureAvailability from "./MembershipSVGs/FeatureAvailability";
import MembershipBg from "./MembershipSVGs/MembershipBg";
import useFetch from "../../Hooks/useFetch";
import DownArrow from "./MembershipSVGs/DownArrow";

const MembershipCard = ({ id, title, price, details, modifierClass, type = 1, image }) => {
  //  Show or hide membership form
  const [showForm, setShowForm] = useState(false);

  // Reference variable to store the reference of the card div
  const ref = useRef(null);

  const handleShowCard = () => {
    // Select all the children cards and collapse the cards by removing the class
    const children = document.querySelectorAll(`#${"membership-card-child"}`);
    children.forEach((element) => {
      if (element.className !== ref.current.firstChild.className) {
        element.className = element.className.replace("show-card", " ");
      }
    });

    // Remove show card class to the office space card first
    if (ref.current.id === "office-space-card") {
      const cards = document.querySelectorAll(`#${ref.current.id}`);
      cards.forEach((element) => {
        if (element.className !== ref.current.className) {
          element.className = element.className.replace("office-space-show-card", "");
        }
      });

      // Add show card class to the specific office space card
      if (!ref.current.className.includes("office-space-show-card")) {
        ref.current.className = ref.current.className.replace(" ", " office-space-show-card ");
      } else {
        ref.current.className = ref.current.className.replace("office-space-show-card", " ");
      }
    }
    // Expand cards by adding show card to the card that was clicked on
    if (!ref.current.firstChild.className.includes("show-card")) {
      ref.current.firstChild.className = ref.current.firstChild.className.replace(" ", " show-card ");
    } else {
      ref.current.firstChild.className = ref.current.firstChild.className.replace("show-card", "");
    }
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    if (e.target.className === "membership_modal" && e.target.className !== "membership_modal_container") {
      setShowForm(false);
    }
  };
  const handleShowModal = () => {
    setShowForm(true);
  };
  return (
    <div
      id={`${image ? "office-space-card" : "membership-card"}`}
      ref={ref}
      className={`${image ? "office-space-card-container " : "membership-card-container"}`}
    >
      <div
        id="membership-card-child"
        className={`membership-card ${modifierClass ? modifierClass : ""} ${image ? " card-bg-image" : ""}`}
        onClick={() => handleShowCard()}
      >
        <div className={`membership-card_plan`}>
          <MembershipBg />
          <div className="membership-card_plan_header">
            <h2 className="membership-card_plan_header_title">{title}</h2>
            <h3 className="membership-card_plan_header_price">
              BDT {price}
              <span>
                <DownArrow />
              </span>
            </h3>
            <span className="membership-card_plan_header_duration">8hrs / month</span>
          </div>
        </div>
        <div className="membership-card_details">
          {details &&
            details.map(({ name, is_available }, index) => {
              return (
                <div key={index} className="membership-card_details_paragraph">
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
        {showForm && (
          <MembershipModal handleCloseModal={handleCloseModal} optionTitle={title} optionId={id} type={type} />
        )}
      </div>
      {image && <img src={image} alt="" />}
    </div>
  );
};

export default MembershipCard;
