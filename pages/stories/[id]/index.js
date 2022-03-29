import { useRouter } from 'next/router';
import React from 'react';
import useFetch from '../../../components/Hooks/useFetch';

const StoryDetails = () => {
    let router = useRouter()
    const { id } = router.query
    const detailStory = useFetch(`/get-story-detail/${id}`)
    return (
        <>
        {
            detailStory[0] && <div dangerouslySetInnerHTML={{__html: detailStory[0].details}}></div>
        }
        </>
        
    );
};

export default StoryDetails;