import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "../../Shared/Button/Button";
import FeatureAvailability from "../../Shared/MembershipCard/MembershipSVGs/FeatureAvailability";
import ShowMoreSvg from "./ShowMoreSvg";
const SpaceCard = ({
  image,
  title,
  price,
  duration,
  size,
  seating,
  description,
  amenities,
  direction = "right",
  cardVisibility,
  handleVisibility,
  onMobileScreen = false,
  newDescription,
  index,
}) => {
  console.log(index);
  return (
    <div className={`spaces-card_container spaces-card_container_${direction}`}>
      <h2 className="spaces-card_container_title">{`${title} BDT ${price}/${
        duration > 1 ? duration + "hrs" : "hr"
      }`}</h2>
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
          <Link href="/event-space/send-enquiry">
            <a>
              <Button type="secondary" text="Book Now!" />
            </a>
          </Link>
        </div>
        <div className={`spaces-card_features ${index === 2 ? "feature-style" : ""}`}>
          <h2>Amenities</h2>
          {newDescription ? (
            <p className="description">
              Our studio space of 3000 sq.ft can be used as film studio, video studio, photo studio, production space.
              Besides the breathtaking view, we have some interesting backdrops and spaces to shoot in around the
              facility. It also has a fully-furnished café which are all included in the space rental. The studio space
              comes with ample amount of natural light and can be fully blacked out. Our space is perfect for your next
              video/film/commercial project or photography shoot. The studio includes space for the camera team and
              production amenities. Impact Hub cafe can be added to any production for additional space or for shooting.
            </p>
          ) : (
            amenities.length > 0 &&
            amenities.map(({ feature, availability }, index) => {
              return (
                <p key={index}>
                  {feature} <FeatureAvailability available={availability} />
                </p>
              );
            })
          )}
        </div>
        {!onMobileScreen && (
          <button
            className={`spaces-card_show-more ${newDescription ? "show-more-new" : ""}`}
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
