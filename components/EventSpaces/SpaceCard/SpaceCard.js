import React from "react";
import Button from "../../Shared/Button/Button";
import FeatureAvailability from "../../Shared/MembershipCard/MembershipSVGs/FeatureAvailability";
import ShowMoreSvg from "./ShowMoreSvg";
const SpaceCard = () => {
  return (
    <div className="spaces-card">
      <img src="/images/event-spaces/spaces-card-img.png" alt="" />
      <div className="spaces-card_bg-gradient"></div>
      <div className="spaces-card_details">
        <h2 className="spaces-card_details_title">Hub Cafe</h2>
        <div className="spaces-card_details_size-seating">
          <div className="spaces-card_details_size-seating_size">
            <p>size</p>
            <p>
              1200 ft <sup>2</sup>
            </p>
          </div>
          <div className="spaces-card_details_size-seating_seating">
            <p>seating</p>
            <p>70 people</p>
          </div>
        </div>
        <p className="spaces-card_details_description">
          A lofty, spacious open space for your inspiring events, hackathons, innovation labs,
          innovative workshops, networking and more.
        </p>
        <Button type="secondary" text="Book Now!" />
      </div>
      <div className="spaces-card_features">
        <h2>Amenities</h2>
        <p>
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
        </p>
      </div>
      <button className="spaces-card_show-more">
        Show More <ShowMoreSvg />
      </button>
    </div>
  );
};

export default SpaceCard;
