import React from "react";
import Slider from "react-slick";
import EventCommonCard from "../../Shared/EventCommoncard/EventCommonCard";
import storyThumb from "../../../public/images/story_thumb.png";
import HeadingDescription from "../../Shared/HeadingDescription/HeadingDescription";
import PrevArrow from "./Arrows/PrevArrow";
import NextArrow from "./Arrows/NextArrow";
import storyPath from "../../../public/story_path.png";
import useFetch from "../../Hooks/useFetch";

const PastEvents = () => {
  // Fetch data of past events
  const pastEvents = useFetch("/get-event?type=past");
  const baseUrlForImages = process.env.baseUrlForImages;

  //   Sort the events based on year and months
  pastEvents.sort((a, b) => {
    if (a.year === b.year) {
      return a.month < b.month ? -1 : 1;
    } else {
      return a.year < b.year ? -1 : 1;
    }
  });

  const childSliderSettings = {
    dots: false,
    infinite: false,
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
          slidesToShow: 1,
        },
      },
    ],
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
        <Slider {...parentSliderSettings}>
          {pastEvents.length > 0 &&
            pastEvents.map(({ date, events }, index) => {
              return (
                <div key={index} className="past_events_container_data">
                  <div className="past_events_container_data_header">
                    <h3>{date}</h3>
                  </div>
                  <div className="past_events_container_data_body">
                    {(childSliderSettings.infinite = events.length > 3)}
                    <Slider {...childSliderSettings}>
                      {events.map(({ id, title, start_date, end_date, starts_at, ends_at, image_path }) => {
                        return (
                          <EventCommonCard
                            key={id}
                            title={title}
                            date={`${start_date} - ${end_date}`}
                            starts_at={starts_at}
                            ends_at={ends_at}
                            type="center"
                            thumb={baseUrlForImages + image_path}
                          />
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              );
            })}
          {/* slider container */}
        </Slider>
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
