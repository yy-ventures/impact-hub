import React, { useState } from 'react';
import EventCommonCard from '../Shared/EventCommoncard/EventCommonCard';
import HeadingDescription from '../Shared/HeadingDescription/HeadingDescription';
import storyPath from '../../public/story_path.png';
import useFetch from '../Hooks/useFetch';

const Stories = () => {
    const stories = useFetch('/get-stories')
    
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
                            title={story.title}
                            date={story.location}
                            thumb={`https://ihd.yyventures.org${story.image_path}`}
                            id={story.id}
                            btnText='read more'
                        />
                    )}
                    
                </div>
            </div>
        </section>
    );
};

export default Stories;