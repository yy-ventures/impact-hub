import React, { useState } from 'react';
import EventCommonCard from '../Shared/EventCommoncard/EventCommonCard';
import HeadingDescription from '../Shared/HeadingDescription/HeadingDescription';
import storyPath from '../../public/story_path.png';
import useFetch from '../Hooks/useFetch';

const Stories = () => {
    const stories = useFetch('/get-stories')
    const baseUrlForImages = process.env.baseUrlForImages;
    
    return (
        <section className='stories'>
            {/* event path */}
            <div className='stories_path'>
                <img src={storyPath.src}/>
            </div>
            <div className='stories_main'>
                <div className='stories_main_header'>
                    <HeadingDescription 
                        parentClass="stories_main_header"
                        span='Impact Hub' 
                        heading='Stories'/>
                </div>
                <div className='stories_main_body'>

                    {stories.map(story =>
                        <EventCommonCard
                            key={story.id}
                            title={story.title}
                            date={story.location}
                            thumb={`${baseUrlForImages}${story.image_path}`}
                            id={story.id}
                            btnText='read more'
                            slug='stories'
                        />
                    )}
                    
                </div>
            </div>
        </section>
    );
};

export default Stories;