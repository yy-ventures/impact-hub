import React, { useState } from "react";
import Button from "../../Shared/Button/Button";
import FeatureAvailability from "../../Shared/MembershipCard/MembershipSVGs/FeatureAvailability";
import ShowMoreSvg from "./ShowMoreSvg";
const SpaceCard = ({ title, size, seating, description, amenities, direction = "right" }) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div
      className={`spaces-card spaces-card_${showCard ? "open" : "closed"} spaces-card_${direction}`}
    >
      <img src="/images/event-spaces/spaces-card-img.png" alt="" />
      <div className="spaces-card_bg-gradient"></div>
      <div className="spaces-card_details">
        <h2 className="spaces-card_details_title">{title}</h2>
        <div className="spaces-card_details_size-seating">
          <div className="spaces-card_details_size-seating_size">
            <p>size</p>
            <p>
              {size} ft <sup>2</sup>
            </p>
          </div>
          <div className="spaces-card_details_size-seating_seating">
            <p>seating</p>
            <p>{seating} people</p>
          </div>
        </div>
        <p className="spaces-card_details_description">{description}</p>
        <Button type="secondary" text="Book Now!" />
      </div>
      <div className="spaces-card_features">
        <h2>Amenities</h2>
        {amenities.length > 0 &&
          amenities.map(({ feature, availability }, index) => {
            return (
              <p key={index}>
                {feature} <FeatureAvailability available={availability} />
              </p>
            );
          })}
        {/* <p>
          Wifi <FeatureAvailability available={true} />
        </p>
        <p>
          Projector <FeatureAvailability available={true} />
        </p>
        <p>
          Sound system with 2 microphones <FeatureAvailability available={true} />
        </p>
        <p>
          Writable glass <FeatureAvailability available={true} />
        </p>
        <p>
          Tables and Chairs <FeatureAvailability available={true} />
        </p> */}
      </div>
      <button className="spaces-card_show-more" onClick={() => setShowCard(!showCard)}>
        Show More <ShowMoreSvg />
      </button>
    </div>
  );
};

export default SpaceCard;
