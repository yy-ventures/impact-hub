import { useRouter } from 'next/router';
import React from 'react';
import useFetch from '../../../components/Hooks/useFetch';
import StoryDetails from '../../../components/StoryDetails/StoryDetails';

const storyDetails = () => {
    let router = useRouter()
    const { id } = router.query
    const detailStory = useFetch(`/get-event-detail/${id}`)

    return (
        <>
        {
            detailStory[0] && <StoryDetails html={detailStory[0].description} slug='/events/past-events'></StoryDetails>
        }
        </>
        
    );
};

export default storyDetails;