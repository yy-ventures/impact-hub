import React, { useState } from "react";
import Slider from "react-slick";
import EventCommonCard from "../../Shared/EventCommoncard/EventCommonCard";
import storyThumb from "../../../public/images/story_thumb.png";
import HeadingDescription from "../../Shared/HeadingDescription/HeadingDescription";
import PrevArrow from "./Arrows/PrevArrow";
import NextArrow from "./Arrows/NextArrow";
import storyPath from "../../../public/story_path.png";
import useFetch from "../../Hooks/useFetch";

import leftArrow from '../../../public/icons/prev_icon.png'
import rightArrow from '../../../public/icons/next_icon.png'

const PastEvents = ({type}) => {
  // Fetch data of past events
  const pastEvents = useFetch(`/get-event?type=${type}`);
  const baseUrlForImages = process.env.baseUrlForImages;

  //   Sort the events based on year and months
  pastEvents.sort((a, b) => {
    if (a.year === b.year) {
      return a.month < b.month ? -1 : 1;
    } else {
      return a.year < b.year ? -1 : 1;
    }
  });


  const [slideIndex, setSlideIndex] = useState(0)

  const HandleLeft = i => {
    if(slideIndex <= 0){
      setSlideIndex(pastEvents.length - 1)
      return 
    }
    setSlideIndex(prev => prev - 1)
  }

  const HandleRight = () => {
    if(slideIndex >= pastEvents.length - 1){
      setSlideIndex(0)
      return 
    }
    setSlideIndex(prev => prev + 1)
  }

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
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
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <section className="past_events">
      {/* event path */}
      <div className="past_events_path">
        <img src={storyPath.src} />
      </div>

      {/* past event main */}
      <div className="past_events_header">
        <HeadingDescription parentClass="past_events_header" span="Past Impact Hub Dhaka" heading="Events" />
      </div>
      <div className="past_events_container">
        <div className="past_events_container_data">
          <div className="past_events_container_data_header">
            <span className="past_events_container_data_header_arrow" onClick={HandleLeft}><img src={leftArrow.src}/></span><h3>{pastEvents.length > 0 && pastEvents[slideIndex].date}</h3><span className="past_events_container_data_header_arrow" onClick={HandleRight}><img src={rightArrow.src}/></span>
          </div>
          <div className="past_events_container_data_body">
            {pastEvents.length > 0 && (sliderSettings.infinite = pastEvents[slideIndex].events.length>3)}
            <Slider {...sliderSettings}>
              {pastEvents.length > 0 && pastEvents[slideIndex].events.map(({ id, title, start_date, end_date, starts_at, ends_at, image_path }) => {
                return (
                  <EventCommonCard
                    key={id}
                    id={id}
                    title={title}
                    date={`${start_date} - ${end_date}`}
                    starts_at={starts_at}
                    ends_at={ends_at}
                    type="center"
                    thumb={baseUrlForImages + image_path}
                    slug="events"
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* // events footer */}
      <div className="past_events_footer">
        <HeadingDescription
          span="Discover Our"
          heading="Space"
          paragraph="We are glad that you have found us! We would like to invite you and 
                your team to visit and explore our space. If you are looking for an office 
                for your startup, Impact Hub Dhaka is the right place for you. Book your 
                spot for a trial day or week and check us out."
        />
      </div>
    </section>
  );
};

export default PastEvents;
