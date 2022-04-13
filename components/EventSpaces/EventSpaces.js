import React, { useState, useEffect } from "react";
import EventSpacesBg from "./EventSpacesBg/EventSpacesBg";
import SpaceCard from "./SpaceCard/SpaceCard";
import { spaces } from "./content";
import HeadingDescription from "../Shared/HeadingDescription/HeadingDescription";

const EventSpaces = () => {
  // State value to hold the value of the current screen size
  const [screenWidth, setScreenWidth] = useState(1200);
  // State value to hold the visibility property of the cards
  const [showCard, setShowCard] = useState([false, false, false, false]);
  const [mobileScreen, setMobileScreen] = useState(false);

  const handleVisibility = (index) => {
    let tempState = [false, false, false, false];
    showCard[index] === true ? (tempState[index] = false) : (tempState[index] = true);

    setShowCard(tempState);
  };

  // keep the cards open on mobile screens
  const showCardOnMobile = (screenWidth) => {
    // for mobile screens less than 700px width
    if (screenWidth < 700 && screenWidth !== null) {
      setShowCard([true, true, true, true]);
    } else {
      setShowCard([false, false, false, false]);
    }
  };

  // Get screen size
  useEffect(() => {
    // Set the screen size to screen width state on change
    const onWidthChange = () => {
      setScreenWidth(window.innerWidth);
    };
    showCardOnMobile(screenWidth);
    // Add event listener to listen to screen width changes
    window.addEventListener("resize", onWidthChange);
    return () => window.removeEventListener("resize", onWidthChange); // removes the event listener
  }, [screenWidth]);

  return (
    <section className="event-spaces">
      <EventSpacesBg className={"event-spaces_bg"} />
      <HeadingDescription parentClass="event-spaces" span="Event" heading="Spaces" />
      <div className="event-spaces_cards">
        {spaces.length > 0 &&
          spaces.map(({ image, title, size, seating, description, amenities }, index) => {
            return (
              index < 2 && (
                <div key={index} className={`event-spaces_cards_${index === 0 ? "left" : "right"}`}>
                  <SpaceCard
                    image={spaces[index * 2].image}
                    title={spaces[index * 2].title}
                    size={spaces[index * 2].size}
                    seating={spaces[index * 2].seating}
                    description={spaces[index * 2].description}
                    amenities={spaces[index * 2].amenities}
                    direction={index === 0 ? "left" : "right"}
                    handleVisibility={() => handleVisibility(index * 2)}
                    cardVisibility={showCard[index * 2]}
                  />
                  <SpaceCard
                    image={spaces[index * 2 + 1].image}
                    title={spaces[index * 2 + 1].title}
                    size={spaces[index * 2 + 1].size}
                    seating={spaces[index * 2 + 1].seating}
                    description={spaces[index * 2 + 1].description}
                    amenities={spaces[index * 2 + 1].amenities}
                    direction={index === 0 ? "left" : "right"}
                    handleVisibility={() => handleVisibility(index * 2 + 1)}
                    cardVisibility={showCard[index * 2 + 1]}
                  />
                </div>
              )
            );
          })}
      </div>
    </section>
  );
};

export default EventSpaces;
