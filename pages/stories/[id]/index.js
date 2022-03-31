import { useRouter } from 'next/router';
import React from 'react';
import useFetch from '../../../components/Hooks/useFetch';
import StoryDetails from '../../../components/StoryDetails/StoryDetails';

const storyDetails = () => {
    let router = useRouter()
    const { id } = router.query
    const detailStory = useFetch(`/get-story-detail/${id}`)
    return (
        <>
        {
            detailStory[0] && <StoryDetails html={detailStory[0].details}></StoryDetails>
        }
        </>
        
    );
};

export default storyDetails;