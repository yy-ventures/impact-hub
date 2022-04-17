import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "../../Shared/Button/Button";
import FeatureAvailability from "../../Shared/MembershipCard/MembershipSVGs/FeatureAvailability";
import ShowMoreSvg from "./ShowMoreSvg";
const SpaceCard = ({
  image,
  title,
  size,
  seating,
  description,
  amenities,
  direction = "right",
  cardVisibility,
  handleVisibility,
  onMobileScreen = false,
}) => {
  return (
    <div className={`spaces-card_container spaces-card_container_${direction}`}>
      <h2 className="spaces-card_container_title">{title}</h2>
      <div className={`spaces-card spaces-card_${cardVisibility ? "open" : "closed"}`}>
        <img src={`/images/spaces/${image ? image : ""}`} alt="spaces" />
        <div className="spaces-card_bg-gradient"></div>
        <div className="spaces-card_details">
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
          <Link href="/office-space">
            <a>
              <Button type="secondary" text="Book Now!" />
            </a>
          </Link>
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
        </div>
        {!onMobileScreen && (
          <button
            className={`spaces-card_show-more`}
            onClick={() => {
              handleVisibility();
            }}
          >
            Show {cardVisibility ? "Less" : "More"} <ShowMoreSvg className={`spaces-card_show-more_${direction}`} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SpaceCard;
