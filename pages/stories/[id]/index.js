import { useRouter } from "next/router";
import React from "react";
import useFetch from "../../../components/Hooks/useFetch";
import StoryDetails from "../../../components/StoryDetails/StoryDetails";

const storyDetails = () => {
  let router = useRouter();
  const { id } = router.query;
  const detailStory = useFetch(`/get-story-detail/${id}`);
  const stories = useFetch("/get-stories");
  const story = stories.filter(({ id: storyId }) => {
    return storyId == id;
  });

  return (
    <>
      {story[0] && detailStory[0] && (
        <StoryDetails
          image={story[0].image_path}
          title={story[0].title}
          html={detailStory[0].details}
          slug="stories"
        ></StoryDetails>
      )}
    </>
  );
};

export default storyDetails;
