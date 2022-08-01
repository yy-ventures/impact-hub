import React from "react";
import EventSpaces from "../../components/EventSpaces/EventSpaces";

// Custom Hook
import useFetch from "../../components/Hooks/useFetch";

const Spaces = () => {
  // Fetching Data From The Api
  const spaces = useFetch("/get-event-space");

  return <EventSpaces spaces={spaces} />;
};

export default Spaces;
