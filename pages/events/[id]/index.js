import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.production.min";
import useFetch from "../../../components/Hooks/useFetch";
import StoryDetails from "../../../components/StoryDetails/StoryDetails";

const storyDetails = () => {
  let router = useRouter();
  const { id } = router.query;
  const eventDetail = useFetch(`/get-event-detail/${id}`);
  // get all the past events
  const pastEvents = useFetch(`/get-event?type=past`);
  //  get all the upcoming events
  const upcomingEvents = useFetch(`/get-event?type=upcoming`);
  // event state to hold the event of the specified id
  const [event, setEvent] = useState([]);

  useEffect(() => {
    //   concat both past and upcoming events to get all the events
    const eventsPerMonth = pastEvents.concat(upcomingEvents);
    // filter out the events with the specific id
    const tempEvent = eventsPerMonth.map(({ events }) => {
      return events.filter(({ id: eventId }) => {
        return eventId == id;
      });
    });

    setEvent(tempEvent);
  }, [pastEvents, upcomingEvents]);
  return (
    <>
      {event[0] && eventDetail[0] && (
        <StoryDetails
          image={event[0][0].image_path}
          title={event[0][0].title}
          html={eventDetail[0].description}
          slug="/events/past-events"
        ></StoryDetails>
      )}
    </>
  );
};

export default storyDetails;
