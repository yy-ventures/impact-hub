import React from "react";
// COMPONENTS
import EventSpaces from "../../components/EventSpaces/EventSpaces";
import SendEnquiry from "../../components/EventSpaces/SendEnquiry/SendEnquiry";

// CUSTOM HOOKS
import useFetch from "../../components/Hooks/useFetch";

const Spaces = () => {
  // Fetching Data From The Api
  const spaces = useFetch("/get-event-space");

  return (
    <>
      <EventSpaces spaces={spaces} />
      <SendEnquiry />
    </>
  );
};

export default Spaces;
