import React from "react";
import EventSpacesBg from "./EventSpacesBg/EventSpacesBg";
import SpaceCard from "./SpaceCard/SpaceCard";

const EventSpaces = () => {
  return (
    <section className="event-spaces">
      <EventSpacesBg className={"event-spaces_bg_top"} />
      <div className="event-spaces_cards">
        <div className="event-spaces_cards_left">
          <SpaceCard direction="left" />
          <SpaceCard direction="left" />
        </div>
        <div className="event-spaces_cards_right">
          <SpaceCard />
          <SpaceCard />
        </div>
      </div>
      <EventSpacesBg className={"event-spaces_bg_bottom"} />
    </section>
  );
};

export default EventSpaces;
