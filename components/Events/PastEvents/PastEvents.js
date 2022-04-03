import React from 'react';
import Slider from "react-slick";
import EventCommonCard from '../../Shared/EventCommoncard/EventCommonCard';
import storyThumb from '../../../public/images/story_thumb.png'
import HeadingDescription from '../../Shared/HeadingDescription/HeadingDescription';
import PrevArrow from './Arrows/PrevArrow';
import NextArrow from './Arrows/NextArrow';
import storyPath from '../../../public/story_path.png';


const PastEvents = () => {

    const childSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };

    const parentSliderSettings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    };
    
    return (
        <section className='past_events'>
            {/* event path */}
            <div className='past_events_path'>
                <img src={storyPath.src} />
            </div>

            {/* past event main */}
            <div className='past_events_header'>
                <HeadingDescription span='Past Impact Hub Dhaka' heading='Events' />
            </div>
            <div className='past_events_container'>
                <Slider {...parentSliderSettings}>
                    {/* slider container */}
                    <div className='past_events_container_data'>
                        <div className='past_events_container_data_header'>
                            <h3>November 2022</h3>
                        </div>
                        <div className='past_events_container_data_body'>
                            <Slider {...childSliderSettings}>
                                <EventCommonCard
                                    title='Workshop on community building and the art of networking'
                                    date='7 September 2020 - Dhaka'
                                    time='3:00pm to 5:00 pm'
                                    type='center'
                                    thumb={storyThumb.src}
                                />
                                <EventCommonCard
                                    title='Workshop on community building and the art of networking'
                                    date='7 September 2020 - Dhaka'
                                    time='3:00pm to 5:00 pm'
                                    type='center'
                                    thumb={storyThumb.src}
                                />
                                <EventCommonCard
                                    title='Workshop on community building and the art of networking'
                                    date='7 September 2020 - Dhaka'
                                    time='3:00pm to 5:00 pm'
                                    type='center'
                                    thumb={storyThumb.src}
                                />
                                <EventCommonCard
                                    title='Workshop on community building and the art of networking'
                                    date='7 September 2020 - Dhaka'
                                    time='3:00pm to 5:00 pm'
                                    type='center'
                                    thumb={storyThumb.src}
                                />
                            </Slider>
                        </div>
                    </div>

                    {/* slider */}
                    <div className='past_events_container_data'>
                        <div className='past_events_container_data_header'>
                            <h3>October 2022</h3>
                        </div>
                        <div className='past_events_container_data_body'>
                            <Slider {...childSliderSettings}>
                                <EventCommonCard
                                    title='Workshop on community building and the art of networking'
                                    date='7 September 2020 - Dhaka'
                                    time='3:00pm to 5:00 pm'
                                    type='center'
                                    thumb={storyThumb.src}
                                />
                                <EventCommonCard
                                    title='Workshop on community building and the art of networking'
                                    date='7 September 2020 - Dhaka'
                                    time='3:00pm to 5:00 pm'
                                    type='center'
                                    thumb={storyThumb.src}
                                />
                                <EventCommonCard
                                    title='Workshop on community building and the art of networking'
                                    date='7 September 2020 - Dhaka'
                                    time='3:00pm to 5:00 pm'
                                    type='center'
                                    thumb={storyThumb.src}
                                />
                                <EventCommonCard
                                    title='Workshop on community building and the art of networking'
                                    date='7 September 2020 - Dhaka'
                                    time='3:00pm to 5:00 pm'
                                    type='center'
                                    thumb={storyThumb.src}
                                />
                            </Slider>
                        </div>
                    </div>
                </Slider>
            </div>



            {/* // events footer */}
            <div className='past_events_footer'>
                <HeadingDescription
                    span='Discover Our'
                    heading='Space'
                    paragraph='We are glad that you have found us! We would like to invite you and 
                your team to visit and explore our space. If you are looking for an office 
                for your startup, Impact Hub Dhaka is the right place for you. Book your 
                spot for a trial day or week and check us out.'
                />
            </div>
        </section>
    );
};

export default PastEvents;