import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.production.min";
import useFetch from "../../../components/Hooks/useFetch";
import StoryDetails from "../../../components/StoryDetails/StoryDetails";
import PreLoader from "../../../components/Shared/PreLoader/PreLoader";

const storyDetails = () => {
  let router = useRouter();
  const { id } = router.query;
  const eventDetail = useFetch(`/get-event-detail/${id}`);

  // destructure event detail to get the innerHtml (description) and event data
  const { description, get_event: event } = eventDetail.length > 0 && eventDetail[0];

  return (
    <>
      {eventDetail.length > 0 ? (
        <StoryDetails
          image={event.image_path}
          title={event.title}
          html={eventDetail[0].description}
          slug="/events/past-events"
        ></StoryDetails>
      ) : (
        <PreLoader />
      )}
    </>
  );
};

export default storyDetails;
