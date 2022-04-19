import { useRouter } from "next/router";
import React from "react";
import useFetch from "../../../components/Hooks/useFetch";
import StoryDetails from "../../../components/StoryDetails/StoryDetails";
import PreLoader from "../../../components/Shared/PreLoader/PreLoader";

const storyDetails = () => {
  let router = useRouter();
  const { id } = router.query;
  const storyDetail = useFetch(`/get-story-detail/${id}`);
  const { details, get_story: story, summary } = storyDetail.length > 0 && storyDetail[0];

  return (
    <>
      {storyDetail[0] ? (
        <StoryDetails
          image={story.image_path}
          title={story.title}
          sum={summary}
          html={details}
          slug="stories"
        ></StoryDetails>
      ) : (
        <PreLoader />
      )}
    </>
  );
};

export default storyDetails;
