import React from 'react';
import EventCommonCard from '../Shared/EventCommoncard/EventCommonCard';
import HeadingDescription from '../Shared/HeadingDescription/HeadingDescription';
import storyThumb from '../../public/images/story_thumb.png'
import storyPath from '../../public/story_path.png';

const Stories = () => {
    return (
        <section className='stories'>
            {/* event path */}
            <div className='stories_path'>
                <img src={storyPath.src}/>
            </div>
            <div className='stories_main'>
                <div className='stories_main_header'>
                    <HeadingDescription span='Impact Hub' heading='Stories'/>
                </div>
                <div className='stories_main_body'>
                    <EventCommonCard
                        title='Creating A Bangladesh Where Everyone Thrives'
                        date='7 September 2020 - dhaka'
                        summary='This article was first published on The Prestige Magazine   
                        1. Please tell us about Impact Hub Dhaka and how it has formed? Impact Hub'
                        thumb={storyThumb}
                    />
                    <EventCommonCard
                        title='Creating A Bangladesh Where Everyone Thrives'
                        date='7 September 2020 - dhaka'
                        summary='This article was first published on The Prestige Magazine   
                        1. Please tell us about Impact Hub Dhaka and how it has formed? Impact Hub'
                        thumb={storyThumb}
                    />
                    <EventCommonCard
                        title='Creating A Bangladesh Where Everyone Thrives'
                        date='7 September 2020 - dhaka'
                        summary='This article was first published on The Prestige Magazine   
                        1. Please tell us about Impact Hub Dhaka and how it has formed? Impact Hub'
                        thumb={storyThumb}
                    />
                </div>
            </div>
        </section>
    );
};

export default Stories;