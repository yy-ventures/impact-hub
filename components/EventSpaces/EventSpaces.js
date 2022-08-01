import React, { useState, useEffect } from "react";
import EventSpacesBg from "./EventSpacesBg/EventSpacesBg";
import SpaceCard from "./SpaceCard/SpaceCard";
import { spacesStaticData } from "./content";
import HeadingDescription from "../Shared/HeadingDescription/HeadingDescription";

const EventSpaces = ({ spaces }) => {
  // State value to hold the value of the current screen size
  // Set the screen-width to window's inner width if we are on the client side
  // In SSR we do not have a window on the server side,so we need to check if we are on the client side
  // as we set the screen width to window.innerWidth by putting a condition (typeof window !== 'undefined')
  const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" && window.innerWidth);
  // State value to hold the visibility property of the cards
  const [showCard, setShowCard] = useState([false, false, false, false]);
  const [onMobileScreen, setOnMobileScreen] = useState(false);

  const handleVisibility = (index) => {
    let tempState = [false, false, false, false];
    showCard[index] === true ? (tempState[index] = false) : (tempState[index] = true);

    setShowCard(tempState);
  };

  // keep the cards open on mobile screens
  const showCardOnMobile = (screenWidth) => {
    // for mobile screens less than 700px width
    if (screenWidth <= 800 && screenWidth !== null) {
      setShowCard([true, true, true, true]);
      setOnMobileScreen(true);
    } else {
      setShowCard([false, false, false, false]);
      setOnMobileScreen(false);
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
        {spaces?.map(({ id }, index) => {
          return (
            index < 2 && (
              <div key={id} className={`event-spaces_cards_${index === 0 ? "left" : "right"}`}>
                <SpaceCard
                  image={spacesStaticData[index * 2].image}
                  title={spaces[index * 2].title}
                  price={spaces[index * 2].price}
                  duration={spaces[index * 2].duration}
                  size={spaces[index * 2].size}
                  seating={spaces[index * 2].seating}
                  description={spacesStaticData[index * 2].description}
                  amenities={spacesStaticData[index * 2].amenities}
                  direction={index === 0 ? "left" : "right"}
                  handleVisibility={() => handleVisibility(index * 2)}
                  cardVisibility={showCard[index * 2]}
                  onMobileScreen={onMobileScreen}
                />
                <SpaceCard
                  image={spacesStaticData[index * 2 + 1].image}
                  title={spaces[index * 2 + 1].title}
                  price={spaces[index * 2 + 1].price}
                  duration={spaces[index * 2 + 1].duration}
                  size={spaces[index * 2 + 1].size}
                  seating={spaces[index * 2 + 1].seating}
                  description={spacesStaticData[index * 2 + 1].description}
                  amenities={spacesStaticData[index * 2 + 1].amenities}
                  direction={index === 0 ? "left" : "right"}
                  handleVisibility={() => handleVisibility(index * 2 + 1)}
                  cardVisibility={showCard[index * 2 + 1]}
                  onMobileScreen={onMobileScreen}
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
