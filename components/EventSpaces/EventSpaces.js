import React from "react";
import EventSpacesBg from "./EventSpacesBg/EventSpacesBg";
import SpaceCard from "./SpaceCard/SpaceCard";

const EventSpaces = () => {
  return (
    <section className="event-spaces">
      <EventSpacesBg className={"event-spaces_bg_top"} />
      <div className="event-spaces_cards">
        <SpaceCard />
      </div>
      <EventSpacesBg className={"event-spaces_bg_bottom"} />
    </section>
  );
};

export default EventSpaces;
