import React, { useState } from "react";
import EventSpacesBg from "./EventSpacesBg/EventSpacesBg";
import SpaceCard from "./SpaceCard/SpaceCard";
import { spaces } from "./content";
import HeadingDescription from "../Shared/HeadingDescription/HeadingDescription";

const EventSpaces = () => {
  const handleVisibility = (index) => {
    console.log(index);
  };
  const [visibility, setVisibility] = useState([0, 0, 0, 0]);

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
                    handleVisibility={() => handleVisibility(index)}
                  />
                  <SpaceCard
                    image={spaces[index * 2 + 1].image}
                    title={spaces[index * 2 + 1].title}
                    size={spaces[index * 2 + 1].size}
                    seating={spaces[index * 2 + 1].seating}
                    description={spaces[index * 2 + 1].description}
                    amenities={spaces[index * 2 + 1].amenities}
                    direction={index === 0 ? "left" : "right"}
                    handleVisibility={() => handleVisibility(index)}
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
